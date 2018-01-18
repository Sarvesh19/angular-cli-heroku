import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfigService } from './config.services';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
