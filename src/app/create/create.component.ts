import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  inputFile: string = "";
  arrayOfFile = [];
  constructor() { }
  getValue(input): void {
    console.log(input.value);
    this.arrayOfFile.push(input.value);
  }
  ngOnInit() {
  }

}
