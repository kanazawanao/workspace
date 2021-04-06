import { BooksEntryModel } from './books-entry.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class BooksService {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  generateFormGroup(): FormGroup {
    return this.formBuilder.group(new BooksEntryModel());
  }

  navigateBooksEntry(id: number): void {
    this.router.navigate(['/info/books', id]);
  }

  navigateBooks(): void {
    this.router.navigate(['/info/books']);
  }
}
