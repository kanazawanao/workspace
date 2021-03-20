import { Injectable } from '@angular/core';
import {} from '@angular/google-maps';

@Injectable()
export class MapService {
  constructor() {}

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

  nearbySearch(
    service: google.maps.places.PlacesService,
    request: google.maps.places.PlaceSearchRequest
  ): Promise<google.maps.places.PlaceResult[]> {
    return new Promise((resolve, reject) => {
      service.nearbySearch(request, (results, status) => {
        if (this.nearbySearchResultCheck(status)) {
          resolve(results);
        } else {
          reject(status);
        }
      });
    });
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
