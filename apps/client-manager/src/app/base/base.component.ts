import { Component, OnDestroy } from '@angular/core';
import { EditType } from '@workspace/constants';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnDestroy {
  /** 購読解除用のObservable */
  protected unsubscribeObservable$ = new Subject<void>();

  constructor() {}

  ngOnDestroy(): void {
    this.unsubscribeObservable(this.unsubscribeObservable$);
  }

  /**
   * Observableの購読を解除する
   * @param unsubscribeObservable$ 購読解除用のObservable
   */
  private unsubscribeObservable(unsubscribeObservable$: Subject<void>): void {
    unsubscribeObservable$.next();
    unsubscribeObservable$.complete();
  }
  /**
   * 編集モードのゲッター
   */
  get editType() {
    return EditType;
  }
}
