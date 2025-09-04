import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './app/services/housing.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
  

  imports: [
    HttpClientModule,
    HousingService,
    RouterModule.forRoot(appRoutes),
    RouterOutlet,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BrowserModule
  ]
