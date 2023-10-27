import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import { DirectorsOfficeComponent } from './components/directors-office/directors-office.component';
import { SidebarComponent } from './components/directors-office/director-components/sidebar/sidebar.component';
import { NavHeaderComponent } from './components/directors-office/director-components/nav-header/nav-header.component';
import { TableComponent } from './components/directors-office/director-components/table/table.component';
import { AddItemModalComponent } from './components/directors-office/director-components/add-item-modal/add-item-modal.component';
import { ModalService } from './components/directors-office/director-components/modal.service'
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentdirector } from './components/directors-office/director-components/home/home.component';
import { HomeChartsComponent } from './components/directors-office/director-components/home/home-charts/home-charts.component';
import { HomeStatCounterComponent } from './components/directors-office/director-components/home/home-stat-counter/home-stat-counter.component';
import { WeeklyScheduleComponent } from './components/directors-office/director-components/weekly-schedule/weekly-schedule.component';
import { ChartAnalyticComponent } from './components/directors-office/director-components/chart-analytic/chart-analytic.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
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
