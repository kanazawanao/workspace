import { SidenavPresenterInputData } from './sidenav-presenter-input-data';
import { SidenavPresenterComponent } from './sidenav-presenter.component';
import { UiSidenavModule } from '../ui-sidenav.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

const presenterInputData: SidenavPresenterInputData = {
  headerTitle: 'StoryBookTitle',
  menuTitle: 'StoryBoolMenu',
  options: [
    { value: '', viewValue: 'A' },
    { value: '', viewValue: 'B' },
    { value: '', viewValue: 'C' },
  ],
};

export default {
  title: 'SidenavPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [BrowserAnimationsModule, RouterTestingModule, UiSidenavModule],
  },
  component: SidenavPresenterComponent,
  props: {
    inputData: presenterInputData,
  },
});
