import { Router } from '@angular/router';
import { ObservableTestService } from './../../services/observable-test';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-observable',
  templateUrl: './home-observable.component.html',
  styleUrls: ['./home-observable.component.css']
})
export class HomeObservableComponent implements OnInit {

  constructor(private observableTestService: ObservableTestService) {

  }

  ngOnInit(): void {
    this.observableTestService.subjectToEmitData.subscribe(
      (data) => {
        console.log("Received data from Header");
        console.log(data);
      }
    )

  }

}
