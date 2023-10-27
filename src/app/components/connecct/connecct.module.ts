import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './connect-components/authorization/authorization.component';
import { RegistrationComponent } from './connect-components/registration/registration.component';
import { ResetPasswordComponent } from './connect-components/reset-password/reset-password.component';
import { ConnecctComponent } from './connecct.component';
import { ConnectRoutingModule } from './connect-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConnecctComponent,
    AuthorizationComponent,
    RegistrationComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ConnecctModule { }
