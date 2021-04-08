import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-vacancies',
  templateUrl: './job-vacancies.component.html',
  styleUrls: ['./job-vacancies.component.css']
})
export class JobVacanciesComponent implements OnInit {

  vacancyArray: string[]=["Front-end developer", "Back-end developer", "Db Administrator"];
  description: string ="";
  constructor() { }

  ngOnInit(): void {
  }
  changeVacancy(event: any){
    let selectedVacancy = event.target.value;
    if(selectedVacancy == "Front-end developer")
    {
      this.description = "Frontend vacancy description";
    }
    else if(selectedVacancy == "Back-end developer")
    {
      this.description = "backend vacancy description";
    }
    else if(selectedVacancy == "Db Administrator")
    {
      this.description = "admin admin db";
    }
    else
    {
      this.description = "";
    }
  }
}
