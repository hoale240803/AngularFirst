
import { EventEmitter } from '@angular/core';
import { UserModel } from './../models/user.model';

export class FindItemsService {

    constructor() {
        
    }
    findAnItem = new EventEmitter<string>();
    findItem(arr: UserModel[], name: string): number {
        let index = arr.findIndex(x => x.name === name);
        return index;
    }


}