import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from "./Property/Property-card/property-card.component"; 
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PropertyListComponent } from './Property/project-list/project-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
