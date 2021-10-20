import { UserModel } from './../models/user.model';
import { FindItemsService } from "./find-item.service";
import { userList } from './data'
import { Injectable } from '@angular/core';

// SERVICE TO SERVICE
@Injectable()
export class DeleteItemsService {
    users: UserModel[] = [];
    constructor(private findItemService: FindItemsService) {
        this.users = userList;
    }
    deleteItem(name: string) {
        let index = this.findItemService.findItem(this.users, name)
        let existUser = this.users.find(x => x.id === index);
        if (existUser) {
            existUser.name = name;
        }
        this.users.forEach(element => {
            if (element.id === existUser?.id) {
                element.name = name;
            }
        });
    }
}