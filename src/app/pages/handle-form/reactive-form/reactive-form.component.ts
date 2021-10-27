import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  genders = [
    {
      label: "Male",
      value: 1
    },
    {
      label: "Female",
      value: 0
    }];
  constructor() { }

  signUpForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      "userName": new FormControl(null),
      "email": new FormControl(null),
      "gender": new FormControl("male"),
      "answer": new FormControl(null),
      "secret": new FormControl(null)

    });
  }
  onSubmit() {

  }

}
