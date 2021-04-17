import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceDetailComponent } from '@workspace/tripig/ui/place-detail';
import {} from '@angular/google-maps';

@Component({
  selector: 'workspace-suggest-list',
  templateUrl: './suggest-list.component.html',
  styleUrls: ['./suggest-list.component.scss'],
})
export class SuggestListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() suggestList: google.maps.places.PlaceResult[] = [];
  googleSearchUrl = 'https://www.google.com/search?q=';

  ngOnInit(): void {}

  onSearchLinkClick(event: MouseEvent, suggestName: string): void {
    event.stopPropagation();
    console.log('onSearchLinkClick');
    const encodedName = suggestName ? encodeURIComponent(suggestName) : '';
    window.open(`${this.googleSearchUrl}${encodedName}`, '_blank');
  }

  openPlaceDetailDialog(
    event: MouseEvent,
    suggest: google.maps.places.PlaceResult
  ): void {
    event.stopPropagation();
    this.dialog.open(PlaceDetailComponent, {
      data: suggest,
    });
  }
}
