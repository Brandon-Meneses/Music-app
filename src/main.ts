import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule) // Incluye HttpClientModule aquí
  ]
}).catch(err => console.error(err));
