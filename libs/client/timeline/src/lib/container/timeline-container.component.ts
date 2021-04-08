import { TimelineService } from '../timeline.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-timeline-container',
  templateUrl: './timeline-container.component.html',
  styleUrls: ['./timeline-container.component.scss'],
})
export class TimelineContainerComponent implements OnInit {
  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {}
}
