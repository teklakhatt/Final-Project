import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-vacancies',
  templateUrl: './job-vacancies.component.html',
  styleUrls: ['./job-vacancies.component.css']
})
export class JobVacanciesComponent implements OnInit {

  vacancyArray: string[]=["front-end developer","back-end developer","db administrator"];
  description: string="";
  constructor() { }

  ngOnInit(): void {
  }
  changeVacancy(event:any){
    let selectedVacancy=event.target.value;
    if(selectedVacancy=="front-end developer"){
      this.description = "front-end developer description"
    }
    else if(selectedVacancy=="back-end developer"){
      this.description = "back-end developer description"
    }
    else if(selectedVacancy=="db administrator"){
      this.description = "db administrator description"
    }
    else{
      this.description="";
    }
  }
}
