import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAccountRoutingModule } from './personal-account.routing.module';
import { AuthGuardService } from './auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { PersonalAccountComponent } from './personal-account.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonalAccountRoutingModule,
    PersonalAccountComponent
  ],
  providers: [AuthGuardService, JwtHelperService, AuthService],
})
export class PersonalAccountModule { }
