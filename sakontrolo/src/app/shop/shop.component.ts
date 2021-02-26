import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productNameInputColor: string = "1px solid grey";
  productPriceInputColor: boolean = false;
  productQuantityInputColor: string = "{'border-color': 'grey'}";

  showError:boolean=false;
  errorText:string="";
  types:string[]=["ხილი", "ბოსტნეული", "სურსათი", "სასმელი", "კანცელარია", "ქიმია"];

  shopForm = new FormGroup({
    idControl: new FormControl('') ,
    nameControl: new FormControl(''),
    priceControl: new FormControl(''),
    quantityControl: new FormControl(''),
    typeControl: new FormControl('')
    });
  constructor() { }
  productsArray: any = [
    {id: 1,name:"apple", price:2, quantity:3000, type:"ხილი"},
    {id: 2,name:"banana", price:3, quantity:300, type:"ხილი"},
    {id: 3,name:"vodka", price:30, quantity:1000, type:"სასმელი"},
    {id: 4,name:"orange", price:5, quantity:3000, type:"ხილი"},
    {id: 5,name:"tomato", price:3, quantity:55000, type:"ხილი"}
  ]

  ngOnInit(): void {
    this.shopForm.patchValue({
      idControl: 6
    });
  }

  validateProductName2(name : string){

    var formValues = this.shopForm.value;
    var productId = formValues.idControl;
    var productName = formValues.nameControl;
    var productPrice = formValues.priceControl;
    var productQuantity = formValues.quantityControl;
    var productType = formValues.typeControl;
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

  validateProductName(name : string){

    var formValues = this.shopForm.value;
    var productId = formValues.idControl;
    var productName = formValues.nameControl;
    var productPrice = formValues.priceControl;
    var productQuantity = formValues.quantityControl;
    var productType = formValues.typeControl;

    var numberArr = [1,2,3,4,5,6,7,8,9,0];
    let result = true
    for(let i = 0;i < numberArr.length; i++)
    {
      if(productName.indexOf(numberArr[i].toString())>-1)
      {
        result = false;
        break;
      }
    }
    return result;
  }
  saveProduct(){
    var formValues = this.shopForm.value;
    var productId = formValues.idControl;
    var productName = formValues.nameControl;
    var productPrice = formValues.priceControl;
    var productQuantity = formValues.quantityControl;
    var productType = formValues.typeControl;

    var numberArr = [1,2,3,4,5,6,7,8,9,0];
   
    if(productName == "")
    {
      this.showError=true;
      this.errorText="name input is empty" 
    }
    else if(this.validateProductName(productName)==false)
    {
      this.showError=true;
      this.errorText="there is number"; 
      this.productNameInputColor = "1px solid red";
    }
    else if(this.validateProductName2(productName)==false)
    {
      this.showError=true;
      this.errorText="წერე ქართულად"; 
      this.productNameInputColor = "1px solid red";
    }
    else if (productPrice<=0){
      this.showError=true;
      this.errorText="fasi unda iyos nolze meti"; 
      this.productPriceInputColor = true;
    }
    else if (productQuantity<=0){
      this.showError=true;
      this.errorText="raodenoba unda iyos nolze meti"; 
      
    }
    else{
      this.productNameInputColor = "1px solid grey";
      this.showError = false;
      this.productPriceInputColor = false;
      this.errorText = ""
    }
   
    /*if(productName.indexOf('0') > -1 ||
    productName.indexOf('0') > -1 ||
    productName.indexOf('1') > -1 ||
    productName.indexOf('2') > -1||
    productName.indexOf('3') > -1||
    productName.indexOf('4') > -1||
    productName.indexOf('5') > -1||
    productName.indexOf('6') > -1||
    productName.indexOf('7') > -1||
    productName.indexOf('8') > -1||
    productName.indexOf('9') > -1)
    {
     this.showError=true;
    this.errorText="name must not contain any kind of number"    }*/
  }
}
