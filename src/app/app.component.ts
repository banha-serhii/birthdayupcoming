import {Component} from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


import {FormControl} from '@angular/forms';
import * as moment from 'moment';

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public dateOfBirth: any,
    public willBecome: number) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class AppComponent {

  date = new FormControl(moment([2021, 0, 1]));
  startDate = new Date(1994, 9, 20);
  nowDate = new Date().getTime();
  firstName = '';
  lastName = '';
  dateOfBirth = this.startDate;
  willBecome = 27;


  users: User[] = [
    {firstName: 'Sergii', lastName: 'Banga', dateOfBirth: '1994, 09, 20', willBecome: 27}
  ];

  addUser() {
    if (this.firstName !== '') {
      const differnce = ((this.nowDate - new Date(this.users[this.users.length - 1].dateOfBirth).getTime()) /
        (1000 * 60 * 60 * 24 * 365)).toFixed(0);
      console.log(differnce);
      console.log('This date: ' + this.nowDate);
      this.users.push(new User(this.firstName, this.lastName, this.dateOfBirth, this.willBecome));
      //  console.log(new Date() - this.users[this.users.length - 1].dateOfBirth);
    }
  }
}
