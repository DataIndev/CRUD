import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsComponent } from './Components/forms/forms.component';
import { ListComponent } from './Components/list/list.component';
import { PersonasService } from './Services/personas.service';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
