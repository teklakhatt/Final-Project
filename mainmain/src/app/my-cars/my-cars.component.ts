import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})
export class MyCarsComponent implements OnInit {

  showError: boolean = false;
  showChangeYearError: boolean = false;
  errorText: string = "";
  inputId: number = 0;
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

  colors: string[] = ["green", "black","white", "yellow","brown", "blue", "red"];
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

  var formValues = this.carForm.value;
  var carName = formValues.nameControl;
  var carYear = formValues.yearControl;
  var carId = formValues.idControl;
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
  var findCar = this.carArray.findIndex((e:any) => e.id == carId);
  console.log(findCar)
  if(findCar >= 0)//თუ აიდი მოიძებნა(რედაქტურება)
  {
    var element = this.carArray.find((e:any) => e.id == carId);
    element.id = formValues.idControl;
    element.name = formValues.nameControl,
    element.year = formValues.yearControl,
    element.color = formValues.colorControl
  }
  else{
 
  this.carArray.push({id: formValues.idControl,
     name: formValues.nameControl, year: formValues.yearControl,
      color: formValues.colorControl});

      this.carForm.patchValue({
        idControl: formValues.idControl + 1
      })
    }
}
}

deleteCarV1(id : number)
{
  console.log(id);
  for(let i = 0; i < this.carArray.length; i++)
  {
    if (this.carArray[i].id == id)
    {
      console.log(this.carArray[i]);
      this.carArray.splice(i,1);
    }
  }
}
deleteCar(id : number)
{
  //var tt = this.carArray.find((e:any) => e.id == id);
//delete this.carArray[1];
  var elementIndex = this.carArray.findIndex((e:any)=> e.id == id)
console.log(elementIndex);
this.carArray.splice(elementIndex,1);
}

edit(id : number){
  var element = this.carArray.find((e:any) => e.id == id);
  console.log(element);
 
this.carForm.patchValue({
idControl: element.id,
nameControl: element.name,
yearControl: element.year,
colorControl: element.color
});
}

changeYear(){

  var element = this.carArray.find((e:any) => e.id == this.inputId);
  console.log(element);
  if(element == undefined)
  {
    this.showChangeYearError = true;
  }
  else{
  element.year = 2020;
  this.showChangeYearError = false;
  }
}
}
