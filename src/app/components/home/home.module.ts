import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './home-components/header/header.component';
import { DialogNewApplicationComponent } from './home-components/dialog-new-application/dialog-new-application.component';
import { SectionONEComponent } from './home-components/section-one/section-one.component';
import { SectionTwoComponent } from './home-components/section-two/section-two.component';
import { SectionThreeComponent } from './home-components/section-three/section-three.component';
import { SectionFourComponent } from './home-components/section-four/section-four.component';
import { FooterComponent } from './home-components/footer/footer.component';
import { NewApplicationModule } from '../new-application/new-application.module';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        NewApplicationModule,
        CardModule,
        HomeComponent,
        HeaderComponent,
        DialogNewApplicationComponent,
        SectionONEComponent,
        SectionTwoComponent,
        SectionThreeComponent,
        SectionFourComponent,
        FooterComponent
    ]
})
export class HomeModule { }
