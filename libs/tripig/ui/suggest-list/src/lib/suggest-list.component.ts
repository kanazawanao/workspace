import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceDetailComponent } from '@workspace/tripig/ui/place-detail';
import { Place } from 'libs/tripig/models/place';

@Component({
  selector: 'workspace-suggest-list',
  templateUrl: './suggest-list.component.html',
  styleUrls: ['./suggest-list.component.scss'],
})
export class SuggestListComponent implements OnInit {
  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  @Input() suggestList: Place[] = [];
  googleSearchUrl = 'https://www.google.com/search?q=';

  ngOnInit(): void {}

  onCheckBoxClick(event: MouseEvent, place: Place): void {
    event.stopPropagation();
    console.log(place);
    this.cdr.detectChanges();
  }

  onSearchLinkClick(event: MouseEvent, suggestName: string): void {
    event.stopPropagation();
    console.log('onSearchLinkClick');
    const encodedName = suggestName ? encodeURIComponent(suggestName) : '';
    window.open(`${this.googleSearchUrl}${encodedName}`, '_blank');
  }

  openPlaceDetailDialog(event: MouseEvent, suggest: Place): void {
    event.stopPropagation();
    this.dialog.open(PlaceDetailComponent, {
      data: suggest,
    });
  }
}
