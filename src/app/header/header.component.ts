import { ObservableTestService } from './../services/observable-test';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: { id: number, name: string } = { id: 0, name: "" }
  constructor(private route: ActivatedRoute, private observableTestService: ObservableTestService, private router: Router) {

  }


  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }
  passDataThroughObservable() {
    this.observableTestService.subjectToEmitData.next("dataFromHeader");
    this.router.navigate(['/homeobservable']);
  }

}
