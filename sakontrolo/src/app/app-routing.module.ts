import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankClientsComponent } from './bank-clients/bank-clients.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { HomeComponent } from './home/home.component';
import { MyImagesComponent } from './my-images/my-images.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PandaComponent } from './panda/panda.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ShopComponent } from './shop/shop.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { TigerComponent } from './tiger/tiger.component';
import { ZooComponent } from './zoo/zoo.component';

const routes: Routes = [

  
  {path:'second-page',component: SecondPageComponent},
  {path:'home',component: HomeComponent},
  {path:'',component:HomeComponent},
  {path:'gallery',component:MyImagesComponent},
  {path:'jobs',component:MyJobsComponent},
  {path:'service',component:ServiceExampleComponent},
  {path:'clients',component:BankClientsComponent},


  {path:'parent',component:ParentComponentComponent},

  {path:'parent/first',component:FirstChildComponent},
    {path:'parent/second',component:SecondChildComponent},


    {path:'zoo',component:ZooComponent},
    {path:'zoo/panda',component:PandaComponent},
    {path:'zoo/tiger',component:TigerComponent},



{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'cars',component:CarsListComponent},
{path:'shop',component:ShopComponent},
{path:'students',component:StudentsListComponent},
{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
