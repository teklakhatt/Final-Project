import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  templateUrl: './switch-example.component.html',
  styleUrls: ['./switch-example.component.css']
})
export class SwitchExampleComponent implements OnInit {

  names: string[] = ["irina", "nino", "gvanca"];
  selectedName: string = "irina";
  constructor() { }

  ngOnInit(): void {
  }

}
