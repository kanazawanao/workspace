import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CATEGORIES, Category } from '@workspace/ui';

@Component({
  selector: 'workspace-point-search',
  templateUrl: './point-search.component.html',
  styleUrls: ['./point-search.component.scss'],
})
export class PointSearchComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {}

  searchForm = this.fb.group({
    destination: new FormControl(''),
  });
  categories: Category[] = CATEGORIES.slice(0, 10);

  ngOnInit(): void {}
  search(category: Category): void {
    this.router.navigate(['/projects/map/point-search'], {
      queryParams: {
        destination: this.searchForm.controls['destination'].value,
        category: category.value,
      },
    });
  }
}
