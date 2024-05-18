import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SearchService } from './search.service';
import { NgFor } from '@angular/common';

interface SelectItem {
  name: string;
  code: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [InputTextModule, DropdownModule, NgFor]
})
export class SearchComponent implements OnInit {

  items: SelectItem[] = [];
  selectedItem: string | undefined;
  Tags: any = []

  constructor(private searchService: SearchService) {
  }
  isTagsOpen: boolean = false;

  toggleTags() {
    this.isTagsOpen = !this.isTagsOpen;
  }
  ngOnInit(): void {
    this.searchService.sendtags().subscribe(
      (data: any) => {
        console.log(data);
        this.Tags = data;
        console.log(this.Tags);
      },
      error => {
        console.error('Error fetching tags', error);
      }
    );
  }
}


