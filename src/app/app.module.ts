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

const appRouter: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'user/:id/:name', component: HeaderComponent },
  { path: 'itemList', component: HeaderComponent },
  { path: 'user', component: HeaderComponent },


]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    RouterModule.forRoot(appRouter)

  ],
  providers: [FindItemsService, ItemsService, UserRootService, UpdateItemsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
