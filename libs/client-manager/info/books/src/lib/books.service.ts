import { BooksEntryModel } from './books-entry.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class BooksService {
  constructor(private formBuilder: FormBuilder, private ruter: Router) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new BooksEntryModel());
  }

  navigateSkillTypesEntry(id: number): void {
    this.ruter.navigate(['/info/books', id]);
  }
}
