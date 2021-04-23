import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ColectivoListComponent } from './colectivo-list/colectivo-list.component';
import { ColectivoFormComponent } from './colectivo-form/colectivo-form.component';
import { ColectivoDetailComponent } from './colectivo-detail/colectivo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ColectivoListComponent,
    ColectivoFormComponent,
    ColectivoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
