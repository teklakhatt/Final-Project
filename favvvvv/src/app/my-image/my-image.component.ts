import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {
  imgSource: string = "111.jpg";
  newImage: string = "";
  baseImageUrl: string ="assets/images/";

  imgArray: string[]=["assets/images/111.jpg","assets/images/22.jpg"];
  constructor() { }

  ngOnInit(): void {
    this.imgSource = this.baseImageUrl + this.imgSource;
  }
changeImage(){
  this.imgSource = this.baseImageUrl +this.newImage;
}
changeImageSelect(event:any)
{
  this.imgSource = event.target.value;
}
}
