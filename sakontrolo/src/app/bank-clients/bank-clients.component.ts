import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-bank-clients',
  templateUrl: './bank-clients.component.html',
  styleUrls: ['./bank-clients.component.css']
})
export class BankClientsComponent implements OnInit {

  showError:boolean=false;
  errorText:string="";
  genders:string[]=['male','female','something else'];
  TF:boolean=true;
 
 

  bankForm = new FormGroup({
    idControl: new FormControl('') ,
    nameControl: new FormControl(''),
    lastnameControl: new FormControl(''),
    ageControl: new FormControl(''),
    genderControl: new FormControl(''),
    moneyControl: new FormControl('')
    });
  constructor() { }
  clientsArray: any = [
    {id: 1,name:"tengo", lastname:"yvavilashvili", age:30, gender:"male", money:1000},
    {id: 2,name:"misha", lastname:"melia", age:45, gender:"male", money:4033},
    {id: 3,name:"leo", lastname:"messi", age:59, gender:"male", money:98676},
    {id: 4,name:"leonardo", lastname:"da vinchi", age:21, gender:"male", money:122},
  ]
  ngOnInit(): void {
    this.bankForm.patchValue({
      idControl: 5
    });
  }
  editClient(id : number){
    var element = this.clientsArray.find((e:any) => e.id == id);
    element.name="lalala";
    this.bankForm.patchValue(
      {
        id:element.idControl,
      name:element.nameControl,
      lastname:element.lastnameControl,
      age:element.ageControl,
      gender:element.genderControl,
      money:element.moneyControl
    }
    );
  }
  deleteClient(id : number){
    
  
    var elementIndex = this.clientsArray.findIndex((e:any) => e.id == id);
   
    this.clientsArray.splice(elementIndex,1);
 
   }
  wereQartuladSaqartveloshi(name : string){

    var Arr = ["ა","ბ","გ","დ","ე","ვ","ზ","თ","ი","კ","ლ","მ","ნ","ო","პ","ჟ","რ","ს","ტ","უ","ფ","ქ","ღ","ყ","შ","ჩ","ც","ძ","წ","ჭ","ხ","ჯ","ჰ"];
    let result = true
    var letters = name.split('');
    for(let i = 0;i < letters.length; i++)
    {
      if(Arr.indexOf(letters[i])== -1)
      {
        result = false;
        break;
      }
    }
    return result;
  }
  
  saveClient(){

    var formValues = this.bankForm.value;
    var clientId = formValues.idControl;
    var clientName = formValues.nameControl;
    var clientLastname = formValues.lastnameControl;
    var clientAge = formValues.ageControl;
    var clientGender = formValues.genderControl;
    var clientMoney = formValues.moneyControl;

    if(this.wereQartuladSaqartveloshi(clientName)==false||this.wereQartuladSaqartveloshi(clientLastname)==false)
    {
      this.showError=true;
      this.errorText=" წერე ქართულად"; 
    }
    else if(clientName.length>10){
      this.showError=true;
      this.errorText=" სახელი არ უნდა შეიცავდეს 10 სიმბოლოზე მეტს"; 
    }
    else if(clientLastname.length>10||clientLastname.length<5)
    {
      this.showError=true;
      this.errorText=" გვარი არ უნდა შეიცავდეს 10 სიმბოლოზე მეტს ან 5ზე ნაკლებს"; 
    }
    
    else if(clientAge<18)
    {
      this.showError=true;
      this.errorText=" 18 წლამდე ხალხს არ ვიღებთ";
    }
    else if(clientGender="")
    {
      this.showError=true;
      this.errorText=" აირჩიე სქესი";
    }
    
    
    else{
      this.showError = false;
      this.errorText = "";
      this.clientsArray.push({id: formValues.idControl, name:  formValues.nameControl,
        lastname:formValues.lastnameControl, age:formValues.ageControl,
        gender:formValues.genderControl, money:formValues.moneyControl});

         this.clientsArray.patchValue({
          idControl: formValues.idControl + 1});
        }
  }
  refresh() {
    location.reload();
   
  }

 
}
