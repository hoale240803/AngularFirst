import { UserModel } from './../models/user.model';
import { FindItemsService } from "./find-item.service";
import { userList } from './data'
import { Injectable } from '@angular/core';
import { UpdateItemsService } from './update-item.service';

// SERVICE TO SERVICE BY INJECTABLE()
@Injectable()
export class UserRootService {
    users: UserModel[] = [];
    constructor(private updateItemService: UpdateItemsService) {
        this.users = userList;
    }
    updateItem(name: string = "hoaxxxx") {
        // let index = this.findItemService.findItem(this.users, name)
        // let existUser = this.users.find(x => x.id === index);
        // if (existUser) {
        //     existUser.name = name;
        // }
        // console.log("existUser", existUser);

        // this.users.forEach(element => {
        //     if (element.id === existUser?.id) {
        //         element.name = name;
        //     }
        // });
        // console.log("user list after updated", this.users);
    }
}
