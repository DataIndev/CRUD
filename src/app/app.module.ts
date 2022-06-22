import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { FormsComponent } from './Components/forms/forms.component';
import { ListComponent } from './Components/list/list.component';
import { PersonasService } from './Services/personas.service';
import { ModalComponent } from './Components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
