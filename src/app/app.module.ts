import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserReadComponent } from './user/user-read/user-read.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserReadComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
