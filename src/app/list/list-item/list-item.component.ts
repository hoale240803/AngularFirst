import { UpdateItemsService } from './../../services/update-item.service';
import { UserRootService } from './../../services/user-root.services';
import { ItemsService } from './../../services/items.services';
import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
//INJECTION
export class ListItemComponent implements OnInit {

  users: UserModel[] = []
  constructor(private itemService: ItemsService, private updateItemService: UpdateItemsService) {

  }

  ngOnInit(): void {
    this.users = this.itemService.getUsers();
  }

  updateUsers(name: string = "") {
    debugger;
    this.updateItemService.updateItem(name);
  }

}
