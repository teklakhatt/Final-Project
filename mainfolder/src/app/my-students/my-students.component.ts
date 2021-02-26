import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css']
})
export class MyStudentsComponent implements OnInit {
  studentTable: any[]=[];
  studentName: string = "";
  studentLastName: string = "";
  studentEmail: string = "";
  studentCity: string = "";
  studentAge: number = 0;
  studentGpa: number = 0;
  studentId: number = 0;
  errorText: string ="";
  showError: boolean = false;
  showSuccess: boolean = false;
  cities: string[] = ["თბილისი", "ქუთაისი","ბათუმი", "ზუგდიდი"];
  constructor() { }

  ngOnInit(): void {
    this.studentTable=[        
      {id: 1, name: 'გიგა', lastName: 'დოლიძე', mail: 'gigadolidze@gmail.com' , age: "21" , city: "Tbilisi" , GPA: '5'},
      {id: 2, name: 'გიორგი', lastName: 'ჯანელიძე', mail: 'giorgijanelidze@gmail.com' , age: "20" , city: "Tbilisi" , GPA: '5' },
      {id: 3, name: 'ოთო', lastName: 'ტლაშაძე', mail: 'ototlashadze@gmail.com' , age: "21" , city: "Tbilisi" , GPA: '5' },    
  ]
  }
  addStudent(){
    if(this.studentName == "")
    {
      this.showError = true;
      this.errorText = "სტუდენტის სახელი შევსებული არ არის";
    }
    else if(this.studentLastName == "")
    {
      this.showError = true;
      this.errorText = "სტუდენტის გვარი შევსებული არ არის";
    }
    else if(this.studentEmail == "")
    {
      this.showError = true;
      this.errorText = "სტუდენტის მეილი შევსებული არ არის";
    }
    else if(this.studentCity == "")
    {
      this.showError = true;
      this.errorText = "სტუდენტის ქალაქი შევსებული არ არის";
    }
    else if(this.studentAge == 0)
    {
      
      this.showError = true;
      this.errorText = "სტუდენტის ასაკი შევსებული არ არის";
    }
    else if(this.studentId == 0)
    { 
      this.showError = true;
      this.errorText = "შეყვანილი აიდი არის  არასწორი";
    }
    else if(this.studentGpa < 0 || this.studentGpa >4)
    {
      this.showError = true;
      this.errorText = "შეყვანილი GPA არასწორია";
    }
    else if(this.studentName.trim().toLowerCase() == this.studentLastName.trim().toLowerCase())
    {
      this.showError = true;
      this.errorText = "სახელი და გვარი ერთნაირი არ შეიძლება იყოს";
    }
    else if (this.studentEmail.indexOf("@") == -1 ||
    this.studentEmail.indexOf(".") == -1
    )
    {
      console.log(this.studentEmail.indexOf("@"));
      this.showError = true;
      this.errorText = "ელ. ფოსტა არასწორია";
    }
    else{
    this.showError = false;
    this.showSuccess = true;
    this.studentTable.push(
      { id: this.studentId,
        name: this.studentName, 
        lastName: this.studentLastName,
         mail: this.studentEmail ,
          age: this.studentAge , 
          city: this.studentCity , 
          GPA: this.studentGpa
        }
    );
    }
  }


  addStudent2(){
    if(this.studentName == "" ||
    this.studentLastName == "" ||
    this.studentAge ==0 ||
    this.studentCity == ""||
    this.studentEmail == "")
    {
      this.showError = true;
      this.errorText = "შეავსეთ ყველა ველი";
     
      console.log(this.studentTable);
    }
else{ this.showError = false;}
  }
}
