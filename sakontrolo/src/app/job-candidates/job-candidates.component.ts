import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-candidates',
  templateUrl: './job-candidates.component.html',
  styleUrls: ['./job-candidates.component.css']
})
export class JobCandidatesComponent implements OnInit {

  candidatesArr:string[]=["nino","megi","ana"];
  showNothing:boolean= true;
  showNino:boolean= false;
  showMegi:boolean= false;
  showAna:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }
  changeCandidate(event:any){
    let selectedName=event.target.value;
    if(selectedName=="nino"){
      this.showNothing=false;
      this.showNino=true;
      this.showMegi=false;
      this.showAna=false;
    }
    else if(selectedName=="megi"){
      this.showNothing=false;
      this.showNino=false;
      this.showMegi=true;
      this.showAna=false;
    }
    else if(selectedName=="ana"){
      this.showNothing=false;
      this.showNino=false;
      this.showMegi=false;
      this.showAna=true;
    }
    else {
      this.showNothing=true;
      this.showNino=false;
      this.showMegi=false;
      this.showAna=false;
    }
  }
}
