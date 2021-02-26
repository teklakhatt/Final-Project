import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { MyTableComponent } from './my-table/my-table.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { MyCardComponent } from './my-card/my-card.component';
import { NumbersCheckComponent } from './numbers-check/numbers-check.component';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { MyHelloComponent } from './my-hello/my-hello.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { MyNamesComponent } from './my-names/my-names.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';
import { SelectComponent } from './select/select.component';
import { MyImagesComponent } from './my-images/my-images.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { JobCandidatesComponent } from './job-candidates/job-candidates.component';
import { JobVacanciesComponent } from './job-vacancies/job-vacancies.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { ZooComponent } from './zoo/zoo.component';
import { PandaComponent } from './panda/panda.component';
import { TigerComponent } from './tiger/tiger.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { ShopComponent } from './shop/shop.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { TestdataService } from './testdata.service';
import { BankClientsComponent } from './bank-clients/bank-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DirectivesExampleComponent,
    MyTableComponent,
    SwitchExampleComponent,
    MyCardComponent,
    NumbersCheckComponent,
    MyCalculatorComponent,
    MyHelloComponent,
    DropdownComponent,
    SecondPageComponent,
    MyNamesComponent,
    NewCalculatorComponent,
    SelectComponent,
    MyImagesComponent,
    MyJobsComponent,
    JobCandidatesComponent,
    JobVacanciesComponent,
    ParentComponentComponent,
    FirstChildComponent,
    SecondChildComponent,
    ZooComponent,
    PandaComponent,
    TigerComponent,
    PageNotFoundComponent,
    StudentsListComponent,
    CarsListComponent,
    ShopComponent,
    ServiceExampleComponent,
    BankClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TestdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
