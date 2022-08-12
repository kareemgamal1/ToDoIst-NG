import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
}
