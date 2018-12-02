import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { QuestionsComponent, DialogDataResultDialog } from './components/questions/questions.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    DialogDataResultDialog
  ],
  entryComponents: [DialogDataResultDialog],
  imports: [
    MatNativeDateModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
