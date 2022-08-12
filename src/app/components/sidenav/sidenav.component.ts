import { Component, OnInit } from '@angular/core';
import { faInbox, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import { faCalendar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  faInbox = faInbox;
  faCalendar = faCalendar;
  faCalendarDays = faCalendarDays;
  constructor() {}

  ngOnInit(): void {}
}
