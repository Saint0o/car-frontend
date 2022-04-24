import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatCommonModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import { EditComponent } from './edit/edit.component';
import {AuthInterceptor} from "./AuthInterceptor";
import { Error403Component } from './error403/error403.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AuthComponent,
    AdminComponent,
    MainComponent,
    Error403Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCommonModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
