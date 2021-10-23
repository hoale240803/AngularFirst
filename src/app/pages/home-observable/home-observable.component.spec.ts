import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeObservableComponent } from './home-observable.component';

describe('HomeObservableComponent', () => {
  let component: HomeObservableComponent;
  let fixture: ComponentFixture<HomeObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
