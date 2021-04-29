import { Injectable } from '@angular/core';
import { Place } from 'libs/tripig/models/place';
import { BehaviorSubject } from 'rxjs';
import {} from '@angular/google-maps';

@Injectable()
export class MapService {
  constructor() {}
  pagination: google.maps.places.PlaceSearchPagination;
  suggestList$: BehaviorSubject<Place[]> = new BehaviorSubject([]);
  keyword: string = '';
  geocode(
    request: google.maps.GeocoderRequest
  ): Promise<google.maps.GeocoderResult> {
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode(request, (result, status) => {
        if (this.geocodeResultCheck(status)) {
          resolve(result[0]);
        } else {
          reject(status);
        }
      });
    });
  }

  private geocodeResultCheck(status: google.maps.GeocoderStatus): boolean {
    if (status === google.maps.GeocoderStatus.OK) {
      return true;
    } else if (status === google.maps.GeocoderStatus.ERROR) {
      console.log('接続に失敗しました。再度やり直してください。');
    } else if (status === google.maps.GeocoderStatus.INVALID_REQUEST) {
      console.log('リクエストが無効です。');
    } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      console.log('時間をおいて再度やり直してください。');
    } else if (status === google.maps.GeocoderStatus.REQUEST_DENIED) {
      console.log('Mapの利用が許可されていません。');
    } else if (status === google.maps.GeocoderStatus.UNKNOWN_ERROR) {
      console.log('サーバーエラーが発生しました。再度やり直してください。');
    } else if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
      console.log(
        '見つかりませんでした。検索キーワードに誤字や脱字がないかご確認ください。地名や郵便番号を追加してみてください。'
      );
    }
    return false;
  }

  route(
    request: google.maps.DirectionsRequest
  ): Promise<google.maps.DirectionsResult> {
    const directionService = new google.maps.DirectionsService();
    return new Promise((resolve, reject) => {
      directionService.route(request, (result, status) => {
        if (this.routeResultCheck(status)) {
          resolve(result);
        } else {
          reject(status);
        }
      });
    });
  }

  private routeResultCheck(status: google.maps.DirectionsStatus): boolean {
    if (status === google.maps.DirectionsStatus.OK) {
      return true;
    } else if (status === google.maps.DirectionsStatus.INVALID_REQUEST) {
      console.log('リクエストが無効です。');
    } else if (status === google.maps.DirectionsStatus.MAX_WAYPOINTS_EXCEEDED) {
      console.log(
        '経由地点が多すぎて検索することができませんでした。最大8箇所までに絞り込んでください。'
      );
    } else if (status === google.maps.DirectionsStatus.NOT_FOUND) {
      console.log('入力された地点を検索することができませんでした。');
    } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
      console.log('時間をおいて再度やり直してください。');
    } else if (status === google.maps.DirectionsStatus.REQUEST_DENIED) {
      console.log('Mapの利用が許可されていません。');
    } else if (status === google.maps.DirectionsStatus.UNKNOWN_ERROR) {
      console.log('サーバーエラーが発生しました。再度やり直してください。');
    } else if (status === google.maps.DirectionsStatus.ZERO_RESULTS) {
      console.log('ルートが見つかりませんでした。');
    }
    return false;
  }

  nearbySearch(
    service: google.maps.places.PlacesService,
    request: google.maps.places.PlaceSearchRequest
  ): void {
    if (this.keyword === '') {
      this.keyword = request.keyword;
    } else if (this.keyword !== request.keyword) {
      this.suggestList$.next([]);
    }
    service.nearbySearch(request, (results, status, pagination) => {
      this.nearbySearchResult(results, status, pagination);
    });
  }

  private nearbySearchResult(
    results: google.maps.places.PlaceResult[],
    status: google.maps.places.PlacesServiceStatus,
    pagination: google.maps.places.PlaceSearchPagination
  ) {
    if (this.nearbySearchResultCheck(status)) {
      this.suggestList$.next(
        this.suggestList$.value.concat(results.map((r) => new Place(r)))
      );
      this.pagination = pagination;
    } else {
      // Throw error
    }
  }

  private nearbySearchResultCheck(
    status: google.maps.places.PlacesServiceStatus
  ): boolean {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      return true;
    } else if (status === google.maps.places.PlacesServiceStatus.NOT_FOUND) {
      console.log('お探しの周辺施設が見つかりませんでした。');
    } else if (
      status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR
    ) {
      console.log('サーバーエラーが発生しました。再度やり直してください。');
    } else if (
      status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST
    ) {
      console.log('リクエストが無効です。');
    } else if (
      status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT
    ) {
      console.log('時間をおいて再度やり直してください。');
    } else if (
      status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED
    ) {
      console.log('Mapの利用が許可されていません。');
    } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
      console.log('お探しの周辺施設が見つかりませんでした。');
    }
    return false;
  }
}
