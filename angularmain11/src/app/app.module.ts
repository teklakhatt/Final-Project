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
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PlusMinusNumbersComponent } from './plus-minus-numbers/plus-minus-numbers.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { JobCandidatesComponent } from './job-candidates/job-candidates.component';
import { JobVacanciesComponent } from './job-vacancies/job-vacancies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { MyCarsComponent } from './my-cars/my-cars.component';
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
    MyDropdownComponent,
    SecondPageComponent,
    PlusMinusNumbersComponent,
    NewCalculatorComponent,
    SelectComponentComponent,
    MyImageComponent,
    MyJobsComponent,
    JobCandidatesComponent,
    JobVacanciesComponent,
    PageNotFoundComponent,
    ParentComponentComponent,
    FirstChildComponent,
    SecondChildComponent,
    MyStudentsComponent,
    MyCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
