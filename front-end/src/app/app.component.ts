import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-file-upload';
  uploadedFiles: Array<File>;
  filenames: Array<string>;

  constructor(private http: HttpClient) { }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
    this.filenames = Object.keys(this.uploadedFiles).map(i => ' ' + this.uploadedFiles[i].name)
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }

    this.http.post('/api/upload', formData)
      .subscribe((response) => {
        alert(this.filenames+' uploaded successfully')
      })
  }

}
