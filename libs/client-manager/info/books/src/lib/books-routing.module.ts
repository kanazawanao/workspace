import { BooksEntryContainerComponent } from './entry/container/books-entry-container.component';
import { BooksListGuard } from './list/books-list.guard';
import { BooksContainerComponent } from './list/container/books-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [BooksListGuard],
    component: BooksContainerComponent,
  },
  {
    path: ':id',
    component: BooksEntryContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
