import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWorkerComponent } from './new-worker.component';

const routes: Routes = [
  {
    path: '',
    component: NewWorkerComponent,
    data: {
      title: 'Ny medarbejder'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewWorkerRoutingModule {}
