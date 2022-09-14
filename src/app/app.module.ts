import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListGuard } from './components/list.guard';
import { LoginGuard } from './components/login.guard';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { ListComponent } from './components/list.component';
import { NotFoundComponent } from './components/notFound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LoginGuard, ListGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
