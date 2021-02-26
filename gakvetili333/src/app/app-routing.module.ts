import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyJobsComponent } from './my-jobs/my-jobs.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
