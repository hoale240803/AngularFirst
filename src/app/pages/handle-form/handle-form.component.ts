import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-handle-form',
  templateUrl: './handle-form.component.html',
  styleUrls: ['./handle-form.component.css']
})
export class HandleFormComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }

  // genders = ['male', 'female'];
  // signupForm!: FormGroup;
  // forbiddenUsernames = ['Chris', 'Anna'];


  //working wit HTMLFormElement
  onSubmit(form: NgForm) {
    console.log("form>>", form);
  }


}
