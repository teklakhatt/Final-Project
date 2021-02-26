import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-images',
  templateUrl: './my-images.component.html',
  styleUrls: ['./my-images.component.css']
})
export class MyImagesComponent implements OnInit {

  imgSource:string="sponge.jpg";
  newImage:string="";
  baseImgUrl:string="assets/images/";

  ImgArr:string[]=["assets/images/sponge.jpg","assets/images/krabs.jpg"];
  constructor() { }

  ngOnInit(): void {
    this.imgSource=this.baseImgUrl+this.imgSource;
   
  }
  changeImage(){
    this.imgSource=this.baseImgUrl+this.newImage;
  }
  changeImageSelect(event:any){
    this.imgSource=event.target.value;
  }
}
