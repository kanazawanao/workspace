import { PointSearchControlName } from '../point-search-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from '@workspace/ui';

@Component({
  selector: 'point-search-presenter',
  templateUrl: './point-search-presenter.component.html',
  styleUrls: ['./point-search-presenter.component.scss'],
})
export class PointSearchPresenterComponent implements OnInit {
  @Input() center?: google.maps.LatLng;
  @Input() formGroup: FormGroup;
  @Output() searchEvent = new EventEmitter();
  categories: Category[] = [
    {
      value: '観光',
      viewValue: 'Sightseeing',
      icon: 'local_see',
      isDefault: true,
    },
    {
      value: 'レストラン',
      viewValue: 'Restaurant',
      icon: 'restaurant',
      isDefault: true,
    },
    {
      value: 'ショッピング',
      viewValue: 'Shopping',
      icon: 'shopping_cart',
      isDefault: true,
    },
    { value: 'カフェ', viewValue: 'Cafe', icon: 'local_cafe', isDefault: true },
    { value: 'ホテル', viewValue: 'Hotel', icon: 'hotel', isDefault: true },
    {
      value: 'コンビニ',
      viewValue: 'Convenience Store',
      icon: 'local_convenience_store',
      isDefault: true,
    },
    {
      value: 'ガソリンスタンド',
      viewValue: 'Gas Station',
      icon: 'local_gas_station',
      isDefault: true,
    },
    {
      value: '公園',
      viewValue: 'Park',
      icon: 'local_florist',
      isDefault: true,
    },
    { value: '遊び', viewValue: '遊び', icon: 'sports', isDefault: true },
    { value: '温泉', viewValue: '温泉', icon: 'hot_tub', isDefault: true },
    {
      value: 'ビール',
      viewValue: 'ビール',
      icon: 'sports_bar',
      isDefault: true,
    },
    { value: '動物園', viewValue: 'Zoo', icon: 'pets', isDefault: true },
  ];

  controlName = PointSearchControlName;
  constructor() {}

  ngOnInit(): void {}
}
