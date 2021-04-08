import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  errorText: string = "";
  productNameInputColor: string = "1px solid grey";
  productPriceInputColor: boolean = false;
  productQuantityInputColor: string = "{'border-color': 'grey'}";
  showError: boolean = false;
  types:string[]=["ხილი", "ბოსტნეული", "სურსათი", "სასმელი", "კანცელარია", "ქიმია"];
  productsArray: any = [
    {id: 1,name:"apple", price:2, quantity:3000, type:"ხილი"},
    {id: 2,name:"banana", price:3, quantity:300, type:"ხილი"},
    {id: 3,name:"banana", price:30, quantity:1000, type:"სასმელი"},
    {id: 4,name:"banana", price:5, quantity:3000, type:"ხილი"},
    {id: 5,name:"tomato", price:3, quantity:55000, type:"ხილი"}
  ]

  shopForm = new FormGroup({
    idControl: new FormControl('') ,
    nameControl: new FormControl(''),
    priceControl: new FormControl(''),
    quantityControl: new FormControl(''),
    typeControl: new FormControl('')
    });
  constructor() { }

  ngOnInit(): void {
    this.shopForm.patchValue({
      idControl: 6
    });
  }
  wereQartulad(name: string)
  {
    let result = true;
    var Arr = ["ა","ბ","გ","დ","ე","ვ","ზ","თ","ი","კ","ლ","მ","ნ","ო","პ","ჟ","რ","ს","ტ","უ","ფ","ქ","ღ","ყ","შ","ჩ","ც","ძ","წ","ჭ","ხ","ჯ","ჰ"];
  var letters = name.split('');
  console.log(letters);
  for(let i = 0; i< letters.length; i++)
  {
    if(Arr.indexOf(letters[i]) == -1)
    {
      result = false;
      break;
    }
  }
  return result;
  }
 validateProductName(name: string)
  {
    let result = true;
    var numberArr =[0,1,2,3,4,5,6,7,8,9];
    for(let i = 0; i < numberArr.length; i++)
    {
      if(name.indexOf(numberArr[i].toString()) > -1)
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


if(this.wereQartulad(productName) == false)
{
  this.showError = true;
  this.productNameInputColor = "1px solid red";
  this.errorText = "პროდუქტის დასახელება უნდა შეიცავდეს მხოლოდ ქართულ ასოებს"
}
else if (productName == "")
{
  this.showError = true;
  this.productNameInputColor = "1px solid red";
  this.errorText = "პროდუქტის დასახელება არ უნდა იყოს ცარიელი"
}
else if(this.validateProductName(productName) == false)
{
  this.showError = true;
  this.productNameInputColor = "1px solid red";
  this.errorText = "პროდუქტის დასახელება არ უნდა შეიცავდეს ციფრს"
}
if(productPrice <= 0)
{
  this.showError = true;
  this.productPriceInputColor = true;
  this.errorText = "პროდუქტის ფასი უნდა იყოს 0-ზე მეტი"
}
else if(productQuantity < 0)
{
  this.showError = true;
  this.errorText = "პროდუქტის რაოდენობა არ უბდა იყოს 0-ზე ნაკლები"
}
else{
   this.productNameInputColor = "1px solid grey";
    this.showError = false;
    this.productPriceInputColor = false;
    this.errorText = ""
}

    /*if(productName.indexOf("0") > -1 
    || productName.indexOf("1") > -1
    ||productName.indexOf("2") > -1
    ||productName.indexOf("3") > -1
    ||productName.indexOf("4") > -1
    ||productName.indexOf("5") > -1
    ||productName.indexOf("6") > -1
    ||productName.indexOf("7") > -1
    ||productName.indexOf("8") > -1
    ||productName.indexOf("9") > -1)
  {
    this.showError = true;
    this.errorText = "სტრიქონი შეიცავს ციფრს"
  }
  else{
    this.showError = false;
    this.errorText = ""
  }*/
  }

deleteProduct (id : number)
{
  var element = this.productsArray.find((x:any) => x.id == id);
  console.log(element);
  
var elementIndex = this.productsArray.findIndex((x:any) =>
 x.id == id)

 console.log(elementIndex);
}
findByName(name : string)
{
  var product = this.productsArray.find((x: any) => x.name == name);
  //console.log(product);

  var productList = this.productsArray.filter((x: any) =>
   x.name == name && x.price == 5);
  console.log(productList);
}

}
