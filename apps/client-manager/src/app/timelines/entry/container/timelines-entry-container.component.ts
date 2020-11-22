import { BaseComponent } from '../../../base/base-component';
import { TimelinesService } from '../../timelines.service';
import { TimelinesEntryControlName } from '../skills-entry-control-name';
import { TimelinesEntryModel } from '../timelines-entry-model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { TimelinesFacade } from '../../+state/timelines.facade';
@Component({
  selector: 'client-manager-timelines-entry-container',
  templateUrl: './timelines-entry-container.component.html',
  styleUrls: ['./timelines-entry-container.component.scss'],
})
export class TimelinesEntryContainerComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  formGroup: FormGroup;
  controlName = TimelinesEntryControlName;
  constructor(
    private timelinesService: TimelinesService,
    private timelinesFacade: TimelinesFacade
  ) {
    super();
  }

  ngOnInit(): void {
    var entryModle: TimelinesEntryModel = new TimelinesEntryModel();
    this.formGroup = this.timelinesService.generateFormGroup(entryModle);
    this.timelinesFacade.workTimeline$
      .pipe(takeUntil(this.unsubscribeObservable$))
      .subscribe((x) => {
        if (x) {
          this.formGroup.get(this.controlName.event).setValue(x.event);
          this.formGroup.get(this.controlName.date).setValue(x.date);
        }
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  regist() {
    var registData = new TimelinesEntryModel();
    registData.event = this.formGroup.get(this.controlName.event).value;
    registData.date = this.formGroup.get(this.controlName.date).value;
    console.log(registData);
    this.registSkill(registData);
  }

  registSkill(timeline: TimelinesEntryModel) {
    this.timelinesService.postTimeline(timeline);
  }
}
