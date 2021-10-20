import { FindItemsService } from './../services/find-item.service';
import { ListItemDetailComponent } from './list-item-detail/list-item-detail.component';

import { Component, NgModule, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private findItemService: FindItemsService) { }

  ngOnInit(): void {
  }
  findItem() {
    this.findItemService.findAnItem.emit();
  }

}


