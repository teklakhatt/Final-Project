import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {
  }
showGallery (index: number){
  let prop ={
    images: [
      {path : 'assets/images/gallery/intro_pic1'}

    ],
    index
  }
this.gallery.load(prop);
}
}
