// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pipe-test',
//   templateUrl: './pipe-test.component.html',
//   styleUrls: ['./pipe-test.component.css']
// })
// export class PipeTestComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   servers = [
//     {
//       instanceType: 'medium',
//       name: 'Production',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     },
//     {
//       instanceType: 'large',
//       name: 'User Database',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     },
//     {
//       instanceType: 'small',
//       name: 'Development Server',
//       status: 'offline',
//       started: new Date(15, 1, 2017)
//     },
//     {
//       instanceType: 'small',
//       name: 'Testing Environment Server',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     }
//   ];
//   filteredStatus = '';
//   onAddServer() {
//     this.servers.push({
//       instanceType: 'small',
//       name: 'New Server',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     });
//   }
//   getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
//     return {
//       'list-group-item-success': server.status === 'stable',
//       'list-group-item-warning': server.status === 'offline',
//       'list-group-item-danger': server.status === 'critical'
//     };
//   }

// }
