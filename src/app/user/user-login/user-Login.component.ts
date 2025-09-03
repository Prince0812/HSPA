import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-Login',
  templateUrl: './user-Login.component.html',
  styleUrls: ['./user-Login.component.css'],
  imports: [ CommonModule]
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
