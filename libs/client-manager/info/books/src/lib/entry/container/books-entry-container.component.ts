import { BooksEntryModel } from '../../books-entry.model';
import { BooksService } from '../../books.service';
import { BooksEntryControlName } from '../books-entry-control-name';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BooksFacade } from '../../data-access/+state/books.facade';

@Component({
  selector: 'client-manager-books-entry-container',
  templateUrl: './books-entry-container.component.html',
  styleUrls: ['./books-entry-container.component.scss'],
})
export class BooksEntryContainerComponent implements OnInit {
  constructor(
    private booksService: BooksService,
    private booksFacade: BooksFacade
  ) {}

  editMode$ = this.booksFacade.editMode$;
  formGroup: FormGroup;
  controlName = BooksEntryControlName;

  ngOnInit(): void {
    this.formGroup = this.booksService.generateFormGroup();
    this.booksFacade.workBook$.subscribe((x) => {
      if (x) {
        this.formGroup.get(this.controlName.author).setValue(x.author);
        this.formGroup.get(this.controlName.title).setValue(x.title);
        this.formGroup
          .get(this.controlName.description)
          .setValue(x.description);
        this.formGroup
          .get(this.controlName.impressions)
          .setValue(x.impressions);
        this.formGroup.get(this.controlName.other).setValue(x.other);
        this.formGroup.get(this.controlName.publisher).setValue(x.publisher);
        this.formGroup.get(this.controlName.rate).setValue(x.rate);
        this.formGroup.get(this.controlName.type).setValue(x.type);
        this.formGroup.get(this.controlName.url).setValue(x.url);
      }
    });
  }

  regist() {
    var registData = new BooksEntryModel();
    registData.title = this.formGroup.get(this.controlName.title).value;
    registData.author = this.formGroup.get(this.controlName.author).value;
    registData.description = this.formGroup.get(
      this.controlName.description
    ).value;
    registData.impressions = this.formGroup.get(
      this.controlName.impressions
    ).value;
    registData.other = this.formGroup.get(this.controlName.other).value;
    registData.publisher = this.formGroup.get(this.controlName.publisher).value;
    registData.rate = this.formGroup.get(this.controlName.rate).value;
    registData.type = this.formGroup.get(this.controlName.type).value;
    registData.url = this.formGroup.get(this.controlName.url).value;
    this.booksFacade.createBook(registData);
  }
}
