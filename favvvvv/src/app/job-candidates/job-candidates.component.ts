import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-candidates',
  templateUrl: './job-candidates.component.html',
  styleUrls: ['./job-candidates.component.css']
})
export class JobCandidatesComponent implements OnInit {

  candidatesArray: string[]=["nino", "megi", "ana"];
  showNothing: boolean = true;
  showNino: boolean = false;
  showMegi: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeCandidate(event : any){
  let selectedName = event.target.value;

  if(selectedName == "nino")
  {
    this.showNino = true;
    this.showMegi = false;
    this.showNothing = false;
  }
  if(selectedName == "megi")
  {
    this.showNino = false;
    this.showMegi = true;
    this.showNothing = false;
  }
  if(selectedName == "")
  {
    this.showNino = false;
    this.showMegi = false;
    this.showNothing = true;
  }
  }
}
