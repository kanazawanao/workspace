import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Place } from 'libs/tripig/models/place';

@Component({
  selector: 'workspace-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss'],
})
export class PlaceDetailComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<PlaceDetailComponent>,
    private ngZone: NgZone,
    @Inject(MAT_DIALOG_DATA) public data: Place
  ) {}

  ngOnInit() {}

  onCancelClick() {
    // Hack:Closeが正常に動かなかったため一時的に対応
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }
}
