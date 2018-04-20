import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AllpetComponent } from './allpet/allpet.component';
import { NewpetComponent } from './newpet/newpet.component';
import { EditpetComponent } from './editpet/editpet.component';
import { ShowpetComponent } from './showpet/showpet.component';


@NgModule({
  declarations: [
    AppComponent,
    AllpetComponent,
    NewpetComponent,
    EditpetComponent,
    ShowpetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
