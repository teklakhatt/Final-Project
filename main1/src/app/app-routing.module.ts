import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { HomeComponent } from './home/home.component';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { PlusMinusNumbersComponent } from './plus-minus-numbers/plus-minus-numbers.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'second-page', component: SecondPageComponent},
  {path:'home', component: HomeComponent},
  {path:'parent', component: ParentComponentComponent},

  {path: "parent/first", component: FirstChildComponent},
  {path: "parent/second", component: SecondChildComponent},
  {path: "students", component: MyStudentsComponent},
  {path: "shop", component: ShopComponent},
  {path: "cars", component: MyCarsComponent},
  {path:'plusminus', component: PlusMinusNumbersComponent},
  {path:'gallery', component: MyImageComponent},
  {path:'jobs', component: MyJobsComponent},
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
