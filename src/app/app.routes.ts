import { Routes} from '@angular/router';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyListComponent } from './Property/project-list/project-list';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-Login.component';
import { UserRegisterComponent } from './user/user-register/user-Register.component';

export const routes: Routes = [];


export const appRoutes: Routes = [
    {path: '', component: PropertyListComponent},
    {path: 'buy-property', component: PropertyListComponent},
    {path: 'rent-property', component: PropertyListComponent},
    {path: 'add-property', component: AddPropertyComponent},
    {path: 'property-detail/:id', component: PropertyDetailComponent},
    {path: 'user/login', component: UserLoginComponent},
    {path: 'user/register', component: UserRegisterComponent},
    {path: '**', component: PropertyListComponent}
];
