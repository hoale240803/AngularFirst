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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,

  ],
  providers: [FindItemsService, ItemsService, UserRootService, UpdateItemsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
