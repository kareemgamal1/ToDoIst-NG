import { Component, OnInit, ViewChild } from '@angular/core';
import {
  faGripLines,
  faHouseChimney,
  faMagnifyingGlass,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import {
  faCircle,
  faCircleQuestion,
  faBell,
} from '@fortawesome/free-regular-svg-icons';
import { SidenavService } from '../main/sidenav.service';
import { DoneService } from 'src/app/shared-services/done.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faGripLines = faGripLines;
  faHouse = faHouseChimney;
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;
  faCircle = faCircle;
  faCircleQuestion = faCircleQuestion;
  faBell = faBell;
  tasksDone = this.noOfDone;

  constructor(
    private sideNav: SidenavService,
    private DoneService: DoneService
  ) {}

  ngOnInit(): void {
    this.DoneService.numberOfDone.subscribe((value) => {
      this.tasksDone = value;
    });
  }
  onClick() {
    this.sideNav.toggle();
  }
  
  get noOfDone(): number {
    return this.DoneService.number;
  }
}
