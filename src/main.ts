import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './app/services/housing.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { appRoutes } from './app/app.routes';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
  

  imports: [
    HttpClientModule,
    HousingService,
    RouterModule.forRoot(appRoutes),
    RouterOutlet
  ]
