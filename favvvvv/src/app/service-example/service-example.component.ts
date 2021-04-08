import { Component, OnInit } from '@angular/core';
import { TestdataService } from '../testdata.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  constructor(private testData : TestdataService) { }
  productsArray: any = [];
  ngOnInit(): void {
    this.productsArray = this.testData.getData();
  }

}
