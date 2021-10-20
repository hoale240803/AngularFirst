import { AppModule } from './../app.module';
import { ListModule } from './../list/list.module';
import { UserModel } from './../models/user.model';
import { FindItemsService } from "./find-item.service";
import { userList } from './data'
import { Injectable } from '@angular/core';

// injection

// export class UpdateItemsService {
//     users: UserModel[] = [];
//     constructor(private findItemService: FindItemsService) {
//         this.users = userList;
//     }
//     updateItem(name: string = "hoaxxxx") {
//         let index = this.findItemService.findItem(this.users, name)
//         let existUser = this.users.find(x => x.id === index);
//         if (existUser) {
//             existUser.name = name;
//         }
//         console.log("existUser", existUser);

//         this.users.forEach(element => {
//             if (element.id === existUser?.id) {
//                 element.name = name;
//             }
//         });
//         console.log("user list after updated", this.users);

//     }

// }
@Injectable()
export class UpdateItemsService {
    users: UserModel[] = [];
    constructor(private findItemService: FindItemsService) {
        this.users = userList;
        this.findItemService.findAnItem.subscribe("hoa");
    }
    updateItem(name: string = "hoaxxxx") {
        debugger
        let index = this.findItemService.findItem(this.users, name)
        let existUser = this.users[index]
        if (existUser) {
            existUser.name = name;
        }
        console.log("existUser", existUser);

        this.users.forEach(element => {
            if (element.name === existUser?.name) {
                element.name = 'xxx';
                debugger
            }
            return element
        });
        console.log("user list after updated", this.users);

    }

}

