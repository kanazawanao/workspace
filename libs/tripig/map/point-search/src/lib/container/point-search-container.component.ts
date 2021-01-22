import { PointSearchService } from '../point-search.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'point-search-container',
  templateUrl: './point-search-container.component.html',
  styleUrls: ['./point-search-container.component.scss'],
})
export class PointSearchContainerComponent implements OnInit {
  constructor(private service: PointSearchService) {}
  formGroup: FormGroup = this.service.generateFormGroup();
  ngOnInit(): void {}
  searchEventListner() {}
}
