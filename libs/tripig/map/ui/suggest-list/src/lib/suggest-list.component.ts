import { Component, Input, OnInit } from '@angular/core';
import {} from '@angular/google-maps';

@Component({
  selector: 'workspace-suggest-list',
  templateUrl: './suggest-list.component.html',
  styleUrls: ['./suggest-list.component.scss'],
})
export class SuggestListComponent implements OnInit {
  @Input() suggestList: google.maps.places.PlaceResult[] = [];

  constructor() {}

  ngOnInit(): void {}
}
