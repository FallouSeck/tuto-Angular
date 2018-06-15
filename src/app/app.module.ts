import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlablaComponent } from './blabla/blabla.component';
import { PremierComposantComponent } from './premier-composant/premier-composant.component';
import { DeuxiemeComposantComponent } from './deuxieme-composant/deuxieme-composant.component';
import { TroisiemeComposantComponent } from './troisieme-composant/troisieme-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    BlablaComponent,
    PremierComposantComponent,
    DeuxiemeComposantComponent,
    TroisiemeComposantComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
