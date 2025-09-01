import { Routes, RouterModule} from '@angular/router';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyListComponent } from './Property/project-list/project-list';

export const routes: Routes = [];

export const appRoutes: Routes = [
    {path: '', component: PropertyListComponent},
    {path: 'add-property', component: AddPropertyComponent}
];
