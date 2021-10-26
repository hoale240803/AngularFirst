import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild("formExample")
  signUpForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("form with View-child", this.signUpForm);

  }

}
