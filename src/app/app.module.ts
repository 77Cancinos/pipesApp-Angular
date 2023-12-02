import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Configuración de locale de la app
import localeEsGT from '@angular/common/locales/es-GT'
import localeEsFR from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsGT);
registerLocaleData(localeEsFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-GT'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
