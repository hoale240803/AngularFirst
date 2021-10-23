import { UserModel } from './../../models/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Observer, interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // homeData: UserModel
  nameSubscription: Subscription = new Subscription();
  // customNameSubscription: Subscription;
  myInterval: Observable<number> = interval(1000);
  endInterval: Subscription = new Subscription();
  index: number = 0;
  constructor() { }
  ngOnDestroy(): void {
    this.nameSubscription.unsubscribe();
    this.endInterval.unsubscribe();
  }


  ngOnInit(): void {
    // while (this.index <= 10) {
    //   this.impletementObservable();
    //   this.index = this.index + 1;
    // }
    // this.impletementObservable();

    // Create an Observable that will start listening to geolocation updates
    // when a consumer subscribes.
    this.endInterval = interval(1000).subscribe(() => {
      this.impletementInterval()
    })

  }
  impletementInterval() {
    const myObservable = new Observable((observer: Observer<string>) => {
      observer.next("package 1")
      observer.next("package 2")
      // observer.error("lost package 1")
      observer.complete();
      // When the consumer unsubscribes, clean up data ready for next subscription.
      return {
        unsubscribe() {
          console.log("clear data here");
        }
      };


    });
    // Call subscribe() to start listening for updates.
    this.nameSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => {
        console.log('completed');
      }
    )
    // Stop listening for location after 10 seconds
    setTimeout(() => {
      this.nameSubscription.unsubscribe();
    }, 5000);
  }


}
