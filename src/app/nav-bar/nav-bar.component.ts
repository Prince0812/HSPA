import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [RouterLink, RouterLinkActive, CommonModule, BsDropdownModule]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loggedin() {
    return localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token');
  }

}
