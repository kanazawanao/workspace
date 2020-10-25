import { SkillsService } from '../skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workspace-skill-info-container',
  templateUrl: './skill-info-container.component.html',
  styleUrls: ['./skill-info-container.component.scss'],
  providers: [SkillsService],
})
export class SkillInfoContainerComponent implements OnInit {
  constructor(private SkillService: SkillsService) {}

  ngOnInit(): void {}
}
