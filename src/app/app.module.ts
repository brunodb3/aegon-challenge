import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CatFactsService } from './cat-facts/cat-facts.service';
import { CatFactsComponent } from './cat-facts/cat-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    CatFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CatFactsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
