import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentTable: any[]=[];
  studentId:number=0;
  studentName:string="";
  studentLastName:string="";
  studentEmail:string="";
  studentAge:number=0;
  studentCity:string="";
  studentGPA:number=0;
  errorText:string="";
  showError:boolean=false;
  showSuccess:boolean=false;
  cities:string[]=["tbilisi","qutaisi","batumi","zugdidi"];
 
 

  constructor() { }

  ngOnInit(): void {
    this.studentTable=[
      {id:1, name: 'გიგა', lastName: 'დოლიძე', mail: 'gigadolidze@gmail.com' , age: "21" , city: "Tbilisi" , GPA: '4'},
      {id:2, name: 'გიორგი', lastName: 'ჯანელიძე', mail: 'giorgijanelidze@gmail.com' , age: "20" , city: "Tbilisi" , GPA: '3' },
      {id:3, name: 'ოთო', lastName: 'ტლაშაძე', mail: 'ototlashadze@gmail.com' , age: "21" , city: "Tbilisi" , GPA: '3' }
    ]
  }
  

  addStudent(){​​​​​​​​
  if(this.studentName == "")
      {​​​​​​​​
  this.showError = true;
  this.errorText = "სტუდენტის სახელი შევსებული არ არის";
      }​​​​​​​​
      else if(this.studentId==0){
          
          this.showError=true;
          this.errorText="sheyvanili Id ar arsebobs"
      }
  else if(this.studentLastName == "")
      {​​​​​​​​
  this.showError = true;
  this.errorText = "სტუდენტის გვარი შევსებული არ არის";
      }​​​​​​​​
  else if(this.studentEmail == "")
      {​​​​​​​​
  this.showError = true;
  this.errorText = "სტუდენტის მეილი შევსებული არ არის";
      }​​​​​​​​
  else if(this.studentCity == "")
      {​​​​​​​​
  this.showError = true;
  this.errorText = "სტუდენტის ქალაქი შევსებული არ არის";
      }​​​​​​​​
  else if(this.studentAge == 0)
      {​​​​​​​​
  this.showError = true;
  this.errorText = "სტუდენტის ასაკი შევსებული არ არის";
      }​​​​​​​​
   else if(this.studentGPA <0 || this.studentGPA>4)
      {​​​​​​​​
  this.showError = true;
  this.errorText = "GPA arasworia";
      }​​​​​​​​
    else if(this.studentLastName.trim().toLowerCase()==this.studentName.trim().toLowerCase())
    {
        this.showError=true;
        this.errorText = "saxeli da gvari ertnairi ar unda iyos";
    }
    else if(this.studentEmail.indexOf("@")==-1 || this.studentEmail.indexOf(".")==-1)
    {
        this.showError=true;
        this.errorText = "meili arasworia";
    }
  else{​​​​​​​​
    this.showError=false;
    this.showSuccess=true;
    this.studentTable.push( { id:this.studentId, name: this.studentName, lastName: this.studentLastName, mail: this.studentEmail , age: this.studentAge , city: this.studentCity , GPA:this.studentGPA})

      }​​​​​​​​
    }​​​​​​​​
  addStudent2(){
    if(this.studentName == ""||
     this.studentLastName =="" ||
      this.studentAge ==0||
      this.studentCity==""||
      this.studentEmail=="")
    {
        this.showError=true;
        this.errorText="Seavset yvela veli"
    }
    else{
        this.showError=false;
        this.showSuccess=true;
        this.studentTable.push( { id:this.studentId, name: this.studentName, lastName: this.studentLastName, mail: this.studentEmail , age: this.studentAge , city: this.studentCity , GPA:this.studentGPA})
    }
  }

}
