import { Component, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './director-components/nav-header/nav-header.component';

@Component({
    selector: 'app-directors-office',
    templateUrl: './directors-office.component.html',
    styleUrls: ['./directors-office.component.css'],
    standalone: true,
    imports: [NavHeaderComponent, RouterOutlet]
})
export class DirectorsOfficeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('ID:', id);
      
      
    });
   
  }
  

  
  private isSidebarHidden = false;
  toggleSidebar(): void {
    const sidebar = this.el.nativeElement.querySelector('#sidebar');
  this.isSidebarHidden = !this.isSidebarHidden; // Инвертируем состояние

  if (this.isSidebarHidden) {
    sidebar.classList.add('hide');
    this.togglecontent(290); // Передаем ширину 60
  } else {
    sidebar.classList.remove('hide');
    if (window.innerWidth < 1024) {
      this.togglecontent(0); // Передаем ширину 280
    }else{
      this.togglecontent(60); // Передаем ширину 280
    }
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
