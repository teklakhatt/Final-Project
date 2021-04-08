import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-toys-form',
  templateUrl: './toys-form.component.html',
  styleUrls: ['./toys-form.component.css']
})
export class ToysFormComponent implements OnInit {

  @Output()
  toysadd: EventEmitter<any> = new EventEmitter();

  @Input()
  toy: any;

  @Input()
  maxId: number = 3;

  types:string[]=["რბილი", "კონსტრუქტორი", "ფაზლი", "პირამიდები"];
  constructor() { }

  ngOnInit(): void {
    this.toyForm.patchValue({
      idControl: 4
    });
  }
ngOnChanges(changes: any){
    for(let property in changes)
    {
      console.log(property);
      if(property == "toy")
      {
        //console.log("child component");

        var t = changes[property].currentValue;
        console.log(t);
        if(t != undefined)       
        {
          //console.log(t[0].id);
          this.toyForm.patchValue({
          idControl: t[0].id,
          nameControl: t[0].name,
          priceControl: t[0].price,
          typeControl: t[0].type
        });
      }
      }
    }
  }
  toyForm= new FormGroup({     
    nameControl:  new FormControl(''),
    priceControl:  new FormControl(''),
    idControl:    new FormControl(''),
    typeControl: new FormControl('')
  });

  saveToy()
  {
    var formValues = this.toyForm.value;
    console.log(formValues);

    var newToy = {"id": formValues.idControl, "name": formValues.nameControl, 
"price": formValues.priceControl, "type": formValues.typeControl};
console.log(newToy);

this.toysadd.emit(newToy);

this.toyForm.patchValue({
  idControl: formValues.idControl + 1
});
  }

  clearForm(){
    this.toyForm.patchValue({
      idControl: this.maxId +1,
      nameControl: "",
      priceControl: 0,
      typeControl: ""
  })
}
}
