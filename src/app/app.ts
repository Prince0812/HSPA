import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from "./Property/Property-card/property-card.component";
import { ProjectList } from "./Property/Property-card/project-list/project-list";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PropertyCardComponent, ProjectList, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
