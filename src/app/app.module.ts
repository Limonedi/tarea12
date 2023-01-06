import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoModule } from './contacto/contacto.module';
import { DirectivaDirective } from './directiva.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
