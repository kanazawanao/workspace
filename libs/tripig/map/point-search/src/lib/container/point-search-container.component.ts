import { PointSearchControlName } from '../point-search-control-name';
import { PointSearchService } from '../point-search.service';
import { PointSearchPresenterComponent } from '../presenter/point-search-presenter.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CATEGORIES } from '@workspace/ui';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'point-search-container',
  templateUrl: './point-search-container.component.html',
  styleUrls: ['./point-search-container.component.scss'],
})
export class PointSearchContainerComponent implements OnInit {
  constructor(private service: PointSearchService) {}

  @ViewChild(PointSearchPresenterComponent)
  presenter!: PointSearchPresenterComponent;
  formGroup: FormGroup = this.service.generateFormGroup();
  private _suggestList$: BehaviorSubject<
    google.maps.places.PlaceResult[]
  > = new BehaviorSubject([]);
  get suggestList$(): Observable<google.maps.places.PlaceResult[]> {
    return this._suggestList$.asObservable();
  }
  private _center$: BehaviorSubject<google.maps.LatLng> = new BehaviorSubject(
    new google.maps.LatLng(35.6812362, 139.7649361)
  );
  get center$(): Observable<google.maps.LatLng> {
    return this._center$.asObservable();
  }
  get selectedCategory(): string {
    return CATEGORIES[this.formGroup.get(PointSearchControlName.category).value]
      .value;
  }
  ngOnInit(): void {
    this.initPosition();
  }

  searchEventListner() {
    this.searchPosition();
  }

  initPosition() {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        // 位置情報
        var latlng = new google.maps.LatLng(latitude, longitude);
        this._center$.next(latlng);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchPosition() {
    this.service
      .geocode(this.formGroup.get(PointSearchControlName.destination).value)
      .then((result) => {
        this._center$.next(result.geometry.location);
        this.searchSuggestList();
      });
  }

  private searchSuggestList() {
    const placeService = new google.maps.places.PlacesService(
      this.presenter.mapComponent.map.data.getMap()
    );
    const request: google.maps.places.PlaceSearchRequest = {
      rankBy: google.maps.places.RankBy.PROMINENCE,
      location: this._center$.getValue(),
      radius: 500,
      keyword: `${
        this.formGroup.get(PointSearchControlName.destination).value
      } ${this.selectedCategory}`,
    };
    this.service.nearbySearch(placeService, request).then((results) => {
      console.log(results);
      this._suggestList$.next(results);
    });
  }
}
