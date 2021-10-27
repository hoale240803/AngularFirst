// import { NgForm } from '@angular/forms';
// import { Component, OnInit, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-view-child',
//   templateUrl: './view-child.component.html',
//   styleUrls: ['./view-child.component.css']
// })
// export class ViewChildComponent implements OnInit {

//   genders = [
//     {
//       label: "Male",
//       value: 1
//     },
//     {
//       label: "Female",
//       value: 0
//     }

//   ]
//   @ViewChild("formExample")
//   signUpForm!: NgForm;
//   defaultValueDropbox: String = "teacher";
//   textBox: String = ""
//   answerQuestion: String = ""
//   selectedRadioBtn: String = ""
//   isSubmitted: boolean = false;
//   user = {
//     userName: '',
//     email: '',
//     secretQuestion: '',
//     answer: "",
//     gender: ""

//   }
//   constructor() { }

//   ngOnInit(): void {
//   }
//   onSubmit() {
//     this.isSubmitted = true;
//     console.log("form with View-child", this.signUpForm);
//     this.user.userName = this.signUpForm.value.userName;
//     this.user.email = this.signUpForm.value.email;
//     this.user.secretQuestion = this.signUpForm.value.secret;
//     this.user.gender = this.signUpForm.value.gender.label;
//     this.user.answer = this.signUpForm.value.answer;
//     this.signUpForm.reset();
//   }

// }
//put into .ts file 
      import { NgForm } from '@angular/forms';
      import { Component, OnInit, ViewChild } from '@angular/core';
      
      @Component({
        selector: 'app-view-child',
        templateUrl: './view-child.component.html',
        styleUrls: ['./view-child.component.css']
      })
      export class ViewChildComponent implements OnInit {
      
        genders = [
        {
          label: "Male",
          value: 1
        },
        {
          label: "Female",
          value: 0
        }
      
        ]
        @ViewChild("formExample")
        signUpForm!: NgForm;
        defaultValueDropbox: String = "teacher";
        textBox: String = ""
        answerQuestion: String = ""
        selectedRadioBtn: String = ""
        isSubmitted: boolean = false;
        user = {
        userName: '',
        email: '',
        secretQuestion: '',
        answer: "",
        gender: ""
      
        }
        constructor() { }
      
        ngOnInit(): void {
        }
        onSubmit() {
        this.isSubmitted = true;
        console.log("form with View-child", this.signUpForm);
        this.user.userName = this.signUpForm.value.userName;
        this.user.email = this.signUpForm.value.email;
        this.user.secretQuestion = this.signUpForm.value.secret;
        this.user.gender = this.signUpForm.value.gender.label;
        this.user.answer = this.signUpForm.value.answer;
        this.signUpForm.reset();
        }
      
      }
      
      // put into .html file
      //<!-- handle with ngForm -->
      
      