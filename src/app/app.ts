import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from "./Property/Property-card/property-card.component"; 
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PropertyListComponent } from './Property/project-list/project-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-Register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FormsModule, 
            ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
