import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConnecctComponent } from './components/connecct/connecct.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NewApplicationComponent } from './components/new-application/new-application.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import { DirectorsOfficeComponent } from './components/directors-office/directors-office.component';
import { SidebarComponent } from './components/director-components/sidebar/sidebar.component';
import { NavHeaderComponent } from './components/director-components/nav-header/nav-header.component';
import { TableComponent } from './components/director-components/table/table.component';
import { AddItemModalComponent } from './components/director-components/add-item-modal/add-item-modal.component';
import { ModalService } from './components/director-components/modal.service'
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentdirector } from './components/director-components/home/home.component';
import { HomeChartsComponent } from './components/director-components/home/home-charts/home-charts.component';
import { HomeStatCounterComponent } from './components/director-components/home/home-stat-counter/home-stat-counter.component';
import { WeeklyScheduleComponent } from './components/director-components/weekly-schedule/weekly-schedule.component';
import { ChartAnalyticComponent } from './components/director-components/chart-analytic/chart-analytic.component';
import { NgChartsModule } from 'ng2-charts';
import { AuthorizationComponent } from './components/connecct/connect-components/authorization/authorization.component';
import { RegistrationComponent } from './components/connecct/connect-components/registration/registration.component';
import { ResetPasswordComponent } from './components/connecct/connect-components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnecctComponent,
    NewApplicationComponent,
    MapComponent,
    DirectorsOfficeComponent,
    SidebarComponent,
    NavHeaderComponent,
    TableComponent,
    AddItemModalComponent,
    HomeComponentdirector,
    HomeChartsComponent,
    HomeStatCounterComponent,
    WeeklyScheduleComponent,
    ChartAnalyticComponent,
    AuthorizationComponent,
    RegistrationComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartModule,
    NgChartsModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
