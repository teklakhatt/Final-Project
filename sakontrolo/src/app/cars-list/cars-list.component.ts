import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  showError:boolean=false;
  errorText:string="";
  inputId:number= 0;
  showChangeYearError:boolean=false;
  carForm = new FormGroup ({
    nameControl: new FormControl(''),
    yearControl: new FormControl(''),
    colorControl: new FormControl(''),
    idControl: new FormControl('')
  });
 // nameControl = new FormControl('');
 // yearControl = new FormControl('');
 // colorControl = new FormControl('');
  //idControl = new FormControl('');
  
  colors:string[]=["green","black","white","yellow","blue","purple","gray","brown","cyan"];
  constructor() { }
  carArray: any = [
    {id: 1, name: "Honda", year: 2011, color: "black"},
    {id: 2, name: "Bmw", year: 2013, color: "brown"},
    {id: 3, name: "Suzuki", year: 2016, color: "blue"},
    {id: 4, name: "Ferrari", year: 2019, color: "red" }
   
  ]

  ngOnInit(): void {
   this.carForm.patchValue({
     idControl: 5
   });
  }

  deleteCarV1(id : number){
      console.log(id);
      for(let i = 0;i < this.carArray.length;i++)
      {
        if (this.carArray[i].id == id)
        {
          console.log(this.carArray[i]);
          this.carArray.splice(i,1);
        }
      }
  }
  deleteCar(id : number){
   var tt = this.carArray.find((e:any) => e.id == id);
   //delete this.carArray[1];
   var elementIndex = this.carArray.findIndex((e:any) => e.id == id);
   console.log(tt);
   console.log(elementIndex);
   this.carArray.splice(elementIndex,1);

  }
  edit(id : number){
    var element = this.carArray.find((e:any) => e.id == id);
    element.name="55555";
    this.carForm.patchValue(
      {
        id:element.idControl,
      name:element.nameControl,
      year:element.yearControl,
      color:element.colorControl
    }
    );
  }
  changeYear(){
    var element = this.carArray.find((e:any) => e.id == this.inputId);
    if(element == undefined)
    {
      this.showChangeYearError = true;
    }
    else
    {
      this.showChangeYearError = false;
      element.year=2020;
    }
  
  }
  changeName(){
   // this.nameControl.setValue("tttt");
  }
  saveCar(){
    //console.log(this.carForm.value);
    //console.log(this.carForm.value.nameControl);

    var formValues=this.carForm.value;
    var carName = formValues.nameControl;
    var carYear = formValues.yearControl;
    var carId = formValues.idControl;

    if(carName.length<4||carName.length>10)
    {
      this.showError = true;
      this.errorText = "mwarmoeblis sigrdze unda iyos 4idan 10 simbolomde";
    }
    else if(carYear < 1990 || carYear>2021){
      this.showError = true;
      this.errorText = "manqanis weli unda iyos 1990da 2021mde";
    }
    else{
      this.showError = false;
      this.errorText = "";
      var findCar = this.carArray.findIndex((e:any) => e.id == carId);
      if(findCar>=0){
       var element = this.carArray.find((e:any) => e.id == carId);
       element.id=formValues.idControl;
       element.name=formValues.nameControl;
       element.year=formValues.yearControl;
       element.color=formValues.colorControl;
      }
      else{
      this.showError = false;
      this.errorText = "";
      this.carArray.push({id: formValues.idControl, name:  formValues.nameControl,
         year:  formValues.yearControl, color:  formValues.colorControl});

         this.carForm.patchValue({
          idControl: formValues.idControl + 1});
        }
    }
  }
}
