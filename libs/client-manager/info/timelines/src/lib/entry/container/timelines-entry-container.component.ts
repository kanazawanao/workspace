import { TimelinesEntryModel } from '../../timelines-entry.model';
import { TimelinesService } from '../../timelines.service';
import { TimelinesEntryControlName } from '../skills-entry-control-name';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TimelinesFacade } from '../../data-access/+state/timelines.facade';

@Component({
  selector: 'client-manager-timelines-entry-container',
  templateUrl: './timelines-entry-container.component.html',
  styleUrls: ['./timelines-entry-container.component.scss'],
})
export class TimelinesEntryContainerComponent implements OnInit {
  constructor(
    private timelinesService: TimelinesService,
    private timelinesFacade: TimelinesFacade
  ) {}

  editMode$ = this.timelinesFacade.editMode$;
  formGroup: FormGroup;
  controlName = TimelinesEntryControlName;

  ngOnInit(): void {
    this.formGroup = this.timelinesService.generateFormGroup();
    this.timelinesFacade.workTimeline$.subscribe((x) => {
      if (x) {
        this.formGroup.get(this.controlName.event).setValue(x.event);
        this.formGroup.get(this.controlName.date).setValue(x.date);
      }
    });
  }

  regist() {
    var registData = new TimelinesEntryModel();
    registData.event = this.formGroup.get(this.controlName.event).value;
    registData.date = this.formGroup.get(this.controlName.date).value;
    this.timelinesFacade.createTimeline(registData);
  }
}
