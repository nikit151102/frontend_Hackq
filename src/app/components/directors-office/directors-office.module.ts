import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorRoutingModule } from './directors-office.routing.module';
import { NavHeaderComponent } from './director-components/nav-header/nav-header.component';
import { ModalService } from './director-components/modal.service'
import { ChartModule } from 'primeng/chart';
import { NgChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { DirectorsOfficeComponent } from './directors-office.component';
import { AuthGuardService } from './auth-guard.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    DirectorsOfficeComponent,
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectorRoutingModule,
    ChartModule,
    NgChartsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['http://localhost:8000'], 
      }
    }),
  ],
  providers: [ModalService,AuthGuardService,JwtHelperService,AuthService],
})
export class DirectorsOfficeModule { }
