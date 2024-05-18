import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './connect-components/authorization/authorization.component';
import { RegistrationComponent } from './connect-components/registration/registration.component';
import { ConnectComponent } from './connect.component';
import { ConnectRoutingModule } from './connect-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ConnectRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ConnectComponent,
        AuthorizationComponent,
        RegistrationComponent,
    ]
})
export class ConnectModule { }
