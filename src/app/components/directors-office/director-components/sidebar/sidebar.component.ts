import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.setupSidebar();

  }
  setupSidebar() {
    const allSideMenu = this.sidebar.nativeElement.querySelectorAll('.side-menu.top li a');

    allSideMenu.forEach((item: HTMLElement) => {
      const li = item.parentElement;

      this.renderer.listen(item, 'click', () => {
        allSideMenu.forEach((i: HTMLElement) => {
          this.renderer.removeClass(i.parentElement, 'active');
          if (this.sidebar.nativeElement.classList.contains('hide')) {
            console.log('Класс myClass присутствует в элементе.');
            this.renderer.removeClass(this.sidebar.nativeElement, 'hide');
          }
        });
        this.renderer.addClass(li, 'active');
      });
    });

  }
}
