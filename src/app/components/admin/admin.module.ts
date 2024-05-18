import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderAdminComponent,
    JwtModule.forRoot({
      config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['http://localhost:8000'],
      }
  }),
  ],
  providers: [MessageService,ConfirmationService,AuthGuardService, JwtHelperService, AuthService  ]
})
export class AdminModule { }
