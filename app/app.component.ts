import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Radio button
  genders = [
    { id : 1, value: 'Male'},
    { id : 2, value: 'FeMale'},
  ];
  // this is holding the from intsnace
  myReactiveForm: FormGroup;
  goToDashboard() {
  }
  constructor() {
  }

  // setup the formcontrol

  setupFormControl() {
    this.myReactiveForm = new FormGroup({
      username : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      course : new FormControl('Angular'),
      gender : new FormControl('Male'),
    });
  }

  ngOnInit() {
    // For validation
    this.setupFormControl();
  }
  onSubmit() {
    console.log(this.myReactiveForm);
  }
}
