import { Component, Renderer2, ElementRef } from '@angular/core';
import { ConnectService } from './connect.service';
import { RegistrationComponent } from './connect-components/registration/registration.component';
import { AuthorizationComponent } from './connect-components/authorization/authorization.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.css'],
    standalone: true,
    imports: [NgIf, AuthorizationComponent, RegistrationComponent]
})
export class ConnectComponent {

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
