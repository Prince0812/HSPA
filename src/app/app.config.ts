import { ApplicationConfig, NgModule, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HousingService } from './services/housing.service';
import { provideHttpClient } from '@angular/common/http';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './services/user-service.service';
import { AuthService } from './services/auth.service';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    HousingService,
    provideHttpClient(),
    PropertyDetailComponent,
    FormsModule,
    ReactiveFormsModule,
    UserServiceService,
    AuthService
  ]
};


