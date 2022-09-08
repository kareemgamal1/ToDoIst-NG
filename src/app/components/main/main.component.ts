import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
