import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { HomeComponent } from './home/home.component';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ParentComponent } from './parent/parent.component';
import { PlusMinusNumbersComponent } from './plus-minus-numbers/plus-minus-numbers.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ShopComponent } from './shop/shop.component';
import { MyParentComponent } from './testFolder/my-parent/my-parent.component';
import { ToysListComponent } from './toys/toys-list/toys-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'second-page', component: SecondPageComponent},
  {path:'home', component: HomeComponent},
  {path:'my-parent', component: MyParentComponent},
  {path:'toys', component: ToysListComponent},
  {path:'parent', component: ParentComponent},
  {path:'child', component: ChildComponent},
  {path: "students", component: MyStudentsComponent},
  {path: "shop", component: ShopComponent},
  {path: "users", component: UsersListComponent},
  {path: "serviceexample", component: ServiceExampleComponent},
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
