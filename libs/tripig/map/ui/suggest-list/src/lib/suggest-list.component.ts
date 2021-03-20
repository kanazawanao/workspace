import { Component, Input, OnInit } from '@angular/core';
import {} from '@angular/google-maps';

@Component({
  selector: 'workspace-suggest-list',
  templateUrl: './suggest-list.component.html',
  styleUrls: ['./suggest-list.component.scss'],
})
export class SuggestListComponent implements OnInit {
  @Input() suggestList: google.maps.places.PlaceResult[] = [];
  googleSearchUrl = 'https://www.google.com/search?q=';

  constructor() {}

  ngOnInit(): void {}

  onSearchLinkClick(event: MouseEvent, suggestName: string): void {
    event.stopPropagation();
    console.log('onSearchLinkClick');
    const encodedName = suggestName ? encodeURIComponent(suggestName) : '';
    window.open(`${this.googleSearchUrl}${encodedName}`, '_blank');
  }
}
