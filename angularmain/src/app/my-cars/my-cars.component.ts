import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})
export class MyCarsComponent implements OnInit {

  showError: boolean = false;
  errorText: string = "";
  carForm = new FormGroup({
    nameControl: new FormControl(''),
    yearControl: new FormControl(''),
    colorControl: new FormControl(''),
    idControl: new FormControl('')

  });
  //nameControl = new FormControl('');
  //yearControl = new FormControl('');
  //colorControl = new FormControl('');
  //idControl = new FormControl('');

  colors: string[] = ["green", "black","white", "yellow"];
  constructor() { }
  carArray: any = [
    {id: 1, name: "Honda", year: 2011, color: "black"},
    {id: 2, name: "Bmw", year: 2013, color: "brown"},
    {id: 3, name: "Suzuki", year: 2016, color: "blue"},
    {id: 4, name: "Ferrari", year: 2019, color: "red"}
   
  ]
  ngOnInit(): void {
    this.carForm.patchValue({
      idControl: 5
    })
  }
changeName(){
  this.carForm.patchValue({
    nameControl: "222"
  });
}

saveCar(){
  //console.log(this.carForm.value);
  //console.log(this.carForm.value.nameControl)

  var formValues = this.carForm.value;
  var carName = formValues.nameControl;
  var carYear = formValues.yearControl;
if(carName.length < 4 || carName.length > 10)
{
  this.showError = true;
  this.errorText = "მწარმოებლის სიგრძე უნდა იყოს 4-დან 10 სიმბოლომდე";
}
else if(carYear < 1990 || carYear > 2021)
{
  this.showError = true;
  this.errorText = "მანქანის წელი უნდა იყო 1990-დან 2021-მდე";

}
else{
  this.showError = false;
  this.errorText = "";
  this.carArray.push({id: formValues.idControl,
     name: formValues.nameControl, year: formValues.yearControl,
      color: formValues.colorControl});

      this.carForm.patchValue({
        idControl: formValues.idControl + 2
      })
}
}
}
