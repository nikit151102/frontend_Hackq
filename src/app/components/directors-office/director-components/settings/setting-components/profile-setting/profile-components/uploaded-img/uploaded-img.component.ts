import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-uploaded-img',
  templateUrl: './uploaded-img.component.html',
  styleUrls: ['./uploaded-img.component.css']
})
export class uploadedImgComponent {
  
  @Input() CurrentUser: any = '';
  uploadedFiles: any[] = [];

  constructor( ) { }

  onUpload(event: any) {
    console.log("ntgrffngf",event.files)
    if (event instanceof FileUpload) {
      if (event.files) {
        for (let file of event.files) {
          this.uploadedFiles.push(file);
        }
      }
    }
  }
  
}
