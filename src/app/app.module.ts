import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DirectivaGeneralDirective } from './directivas/directiva-general.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DirectivaGeneralDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
