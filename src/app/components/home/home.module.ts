import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewApplicationComponent } from '../new-application/new-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './home-components/header/header.component';
import { DialogNewApplicationComponent } from './home-components/dialog-new-application/dialog-new-application.component';
import { SectionONEComponent } from './home-components/section-one/section-one.component';
import { SectionTwoComponent } from './home-components/section-two/section-two.component';
import { SectionThreeComponent } from './home-components/section-three/section-three.component';
import { SectionFourComponent } from './home-components/section-four/section-four.component';
import { FooterComponent } from './home-components/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewApplicationComponent,
    HeaderComponent,
    DialogNewApplicationComponent,
    SectionONEComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class HomeModule { }
