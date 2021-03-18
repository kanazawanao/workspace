import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from '@workspace/shared-service';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private router: Router,
    private fireAuthService: FireAuthService
  ) {}

  ngOnInit(): void {}

  signOut() {
    this.fireAuthService.signout().then((result) => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
}
