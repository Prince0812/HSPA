import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [RouterLink, RouterLinkActive, NgIf]
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
