import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { UsersComponent } from './users/users.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent}, 
  {path: 'video', component: VideoBackgroundComponent}, 
  {path: 'pipe', component: PipeExampleComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
