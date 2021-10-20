import { UpdateItemsService } from './../services/update-item.service';
import { UserRootService } from './../services/user-root.services';

import { ItemsService } from './../services/items.services';
import { ListItemComponent } from './list-item/list-item.component';
import { ListItemDetailComponent } from './list-item-detail/list-item-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';



@NgModule({
  declarations: [ListComponent, ListItemDetailComponent, ListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListModule { }
