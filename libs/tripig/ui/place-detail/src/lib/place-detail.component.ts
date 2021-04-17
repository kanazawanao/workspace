import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {} from '@angular/google-maps';

@Component({
  selector: 'workspace-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss'],
})
export class PlaceDetailComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<PlaceDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: google.maps.places.PlaceResult
  ) {}

  ngOnInit() {}

  onCancelClick() {
    this.dialogRef.close();
  }
}
