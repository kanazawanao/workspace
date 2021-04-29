import { MatDialog } from '@angular/material/dialog';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { PlaceDetailComponent } from '@workspace/tripig/ui/place-detail';
import { Place } from 'libs/tripig/models/place';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'workspace-suggest-list',
  templateUrl: './suggest-list.component.html',
  styleUrls: ['./suggest-list.component.scss'],
})
export class SuggestListComponent implements OnInit {
  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  @ViewChild('suggests') checkList!: MatSelectionList;
  @Output() selectEvent: EventEmitter<Place[]> = new EventEmitter();
  @Input() suggestList: Place[] = [];
  @Input() selectedList: Place[] = [];
  get placeList(): Place[] {
    // ここで重複を防ぐ処理を入れる
    return [...this.selectedList, ...this.suggestList].filter(
      (member, index, self) => {
        return self.findIndex((s) => member.place_id === s.place_id) === index;
      }
    );
  }
  googleSearchUrl = 'https://www.google.com/search?q=';

  ngOnInit(): void {}

  onSelectedChange(options: MatListOption[]) {
    const selected: Place[] = [];
    options.map((option) => {
      if (option.selected) {
        selected.push(Object.assign({}, option.value));
      }
    });
    this.selectEvent.emit(selected);
  }

  onCheckBoxClick(event: MouseEvent): void {
    event.stopPropagation();
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
    this.dialog.afterAllClosed.subscribe(() => {
      this.cdr.detectChanges();
    });
  }
}
