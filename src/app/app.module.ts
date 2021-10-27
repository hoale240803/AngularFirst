import { ObservableTestService } from './services/observable-test';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { UserRootService } from './services/user-root.services';
import { ItemsService } from './services/items.services';
import { UpdateItemsService } from './services/update-item.service';


import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListModule } from './list/list.module';
import { TableComponent } from './table/table.component';
import { FindItemsService } from './services/find-item.service';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeObservableComponent } from './pages/home-observable/home-observable.component';
import { HandleFormComponent } from './pages/handle-form/handle-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewChildComponent } from './pages/handle-form/view-child/view-child.component';
import { ValidationComponent } from './pages/handle-form/validation/validation.component';
import { ReactiveFormComponent } from './pages/handle-form/reactive-form/reactive-form.component';

const appRouter: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'user/:id/:name', component: HeaderComponent },
  { path: 'itemList', component: HeaderComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'user', component: HeaderComponent },
  { path: 'homeobservable', component: HomeObservableComponent },
  { path: 'handleform', component: HandleFormComponent },
  { path: 'handleformwithviewchild', component: ViewChildComponent },
  { path: 'handleformvalidation', component: ValidationComponent },
  { path: 'handleformreactiveGroup', component: ReactiveFormComponent },



]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    HomeComponent,
    HomeObservableComponent,
    HandleFormComponent,
    ViewChildComponent,
    ValidationComponent,
    ReactiveFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter)

  ],
  providers: [FindItemsService, ItemsService, UserRootService, UpdateItemsService, ObservableTestService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
