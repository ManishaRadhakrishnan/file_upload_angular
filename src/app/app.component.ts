import { Component, OnInit  } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const UploadURL = 'http://localhost:3000/api/upload';

var reader = new FileReader();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Upload a file';
  public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'sdyuihfkjn'});


  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item, status, response);
         if(status == true){
          alert('File uploaded successfully');
         }
     };
}
public onChange(event, output){
   let file = event.target.files[0];
   console.log(file);
   let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      output.innerHTML = fileReader.result
    }
    fileReader.readAsText(file);

  // this.fileContent= fileReader.readAsText(file);
 }
// reader.onload = function(e) {
//   var text = reader.result;
// };
// text.readAsText(file);


}
