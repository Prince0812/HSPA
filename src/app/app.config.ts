import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HousingService } from './services/housing.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from './services/user-service.service';
import { AuthService } from './services/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),

    // ✅ import Angular modules properly
    importProvidersFrom(
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      BsDropdownModule.forRoot()
    ),

    // ✅ services go here
    HousingService,
    UserServiceService,
    AuthService
  ]
};
