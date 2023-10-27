import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../data.service';
import { ModalService } from '../modal.service'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataFromServer: any = [];
  rowsPerPage: number = 10; // Количество строк на странице
  currentPage: number = 1; // Текущая страница
  pages: number[] = []; // Список страниц

  constructor(private dataService: DataService,public modalService: ModalService,private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.dataService.startPolling(null); // Опрашивать каждые 5 секунд (настройте интервал по вашему усмотрению)
    this.fetchData();
  }
  
  fetchData() {
    this.dataService.sendDataToServer().subscribe((response) => {
      console.log('Ответ сервера:', response);
      this.updateTable(response); 
      this.cdr.detectChanges();
    });
  }

  updateTable(data: any) {
    console.log('Updating table with data:', data);
    this.dataFromServer = data;
    // Вызовите метод обновления пагинации, если это необходимо
    this.updatePages();
  }

  //страницы и количество строк
  onRowsPerPageChange(): void {
    this.currentPage = 1;
    this.updatePages();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  updatePages(): void {
    // Вычисление списка страниц на основе dataFromServer и rowsPerPage
    // Например, если у вас есть 100 записей и rowsPerPage установлено на 10, то у вас будет 10 страниц
    const totalPages = Math.ceil(this.dataFromServer.length / this.rowsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  getPageData(): any[] {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    return this.dataFromServer.slice(startIndex, endIndex);
  }


  sortField: string | null = null;
  sortOrder: number = 1; // 1 для сортировки по возрастанию, -1 для сортировки по убыванию

  //сортировка
  sortData(field: string): void {
    if (this.sortField === field) {
        this.sortOrder *= -1; // Изменить порядок сортировки
    } else {
        this.sortField = field;
        this.sortOrder = 1; // По умолчанию сортировать по возрастанию
    }
    this.updateData();
}
updateData(): void {
  // Сортировка данных
  this.dataFromServer.sort((a: any, b: any) => {
      if (this.sortField) {
          const aValue = a[this.sortField];
          const bValue = b[this.sortField];
          if (aValue < bValue) {
              return -1 * this.sortOrder;
          } else if (aValue > bValue) {
              return 1 * this.sortOrder;
          }
      }
      return 0;
  });
}

//кнопка удаления
handledeleteClick(rowId: number) {
  // Здесь вы можете выполнить необходимые действия с id строки, например, вывести его в консоль
  console.log('Clicked on row with id:', Number(rowId) );
  this.dataService.deleteItem( Number(rowId)).subscribe(response => {
    // Обработка ответа от сервера
    console.log('Server Response:', response);
    
  });
}

 isModalOpen: boolean = false;

openModal() {
  this.isModalOpen = true;
  console.log('isModalOpen:', this.isModalOpen)
}


}