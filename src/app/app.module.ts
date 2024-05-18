import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CreateJobOpeningsComponent } from './components/create-job-openings/create-job-openings.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    CreateJobOpeningsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
