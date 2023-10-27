import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-directors-office',
  templateUrl: './directors-office.component.html',
  styleUrls: ['./directors-office.component.css']
})
export class DirectorsOfficeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  private isSidebarHidden = false;
  toggleSidebar(): void {
    const sidebar = this.el.nativeElement.querySelector('#sidebar');
  this.isSidebarHidden = !this.isSidebarHidden; // Инвертируем состояние

  if (this.isSidebarHidden) {
    sidebar.classList.add('hide');
    this.togglecontent(60); // Передаем ширину 60
  } else {
    sidebar.classList.remove('hide');
    this.togglecontent(280); // Передаем ширину 280
  }
  }
  
  togglecontent(Widthsidebar: number): void {
    const content = this.el.nativeElement.querySelector('#content');
    if (content) {
      const windowWidth = window.innerWidth;
      const newWidth = windowWidth - Widthsidebar
      // Устанавливаем ширину элемента
      this.renderer.setStyle(content, 'left', `${Widthsidebar}px`);
      this.renderer.setStyle(content, 'width', `${newWidth}px`);
    }
  }
  
}
