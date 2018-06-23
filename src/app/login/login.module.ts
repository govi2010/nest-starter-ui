import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ClarityModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
