import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BidningComponent } from './components/bidning/bidning.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { SigginComponent } from './components/siggin/siggin.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { WaringDirective } from './directives/waring.directive';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ObseablesComponent } from './components/obseables/obseables.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BidningComponent,
    DirectivesComponent,
    SigginComponent,
    WaringDirective,
    ParentComponent,
    ChildComponent,
    ObseablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,CommonModule,FormsModule
  
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
