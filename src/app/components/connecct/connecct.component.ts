import { Component, Renderer2, ElementRef } from '@angular/core';
import { ConnectService } from './connect.service';
import { RegistrationComponent } from './connect-components/registration/registration.component';
import { ResetPasswordComponent } from './connect-components/reset-password/reset-password.component';
import { AuthorizationComponent } from './connect-components/authorization/authorization.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-connecct',
    templateUrl: './connecct.component.html',
    styleUrls: ['./connecct.component.css'],
    standalone: true,
    imports: [NgIf, AuthorizationComponent, ResetPasswordComponent, RegistrationComponent]
})
export class ConnecctComponent {

  constructor(private renderer: Renderer2, private el: ElementRef, public connectService: ConnectService) { }

  ngOnInit() {
    const signUp = this.el.nativeElement.querySelector(".signup-link");
    const login = this.el.nativeElement.querySelector(".login-link");
    signUp.addEventListener("click", () => {
      this.renderer.addClass(this.el.nativeElement.querySelector(".container"), "active");
    });

    login.addEventListener("click", () => {
      this.renderer.removeClass(this.el.nativeElement.querySelector(".container"), "active");
    });
  }
}
