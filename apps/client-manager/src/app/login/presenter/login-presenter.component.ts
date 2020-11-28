import { BaseComponent } from '../../base/base-component';
import { FormGroup } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'client-manager-login-presenter',
  templateUrl: './login-presenter.component.html',
  styleUrls: ['./login-presenter.component.scss'],
})
export class LoginPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Output() loginEvent = new EventEmitter();
  @Input() formGroup: FormGroup;
  constructor() {
    super();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
