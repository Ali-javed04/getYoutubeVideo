import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubeVideoComponent } from './components/you-tube-video/you-tube-video.component';

const routes: Routes = [
  {
    path:'', component:YouTubeVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
