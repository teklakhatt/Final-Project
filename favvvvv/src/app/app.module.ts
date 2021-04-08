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
import { ShopComponent } from './shop/shop.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { TestdataService } from './testdata.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyChildComponent } from './testFolder/my-child/my-child.component';
import { MyParentComponent } from './testFolder/my-parent/my-parent.component';
import { ToysListComponent } from './toys/toys-list/toys-list.component';
import { ToysFormComponent } from './toys/toys-form/toys-form.component';
import { HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { UserserviseService } from './userservise.service';
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
    MyCarsComponent,
    ShopComponent,
    ServiceExampleComponent,
    ParentComponent,
    ChildComponent,
    MyChildComponent,
    MyParentComponent,
    ToysListComponent,
    ToysFormComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TestdataService, UserserviseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
