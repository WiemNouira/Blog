import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  selectedFile: ImageSnippet;

  public Editor = ClassicEditor;
  profileForm: FormGroup;
  tableau: any[];
  index: number;
  user:any;


  constructor() {
    this.profileForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.email]),
      owner: new FormControl(''),
      category: new FormControl(''),
    });
   
    this.tableau = JSON.parse(localStorage.getItem('articles'));
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
   
  }

  addArticle() {
   
    this.tableau = JSON.parse(localStorage.getItem('articles'));
    this.profileForm['controls'].owner.setValue(this.user);
    
    this.tableau.push(this.profileForm.value);
    localStorage.setItem('articles', JSON.stringify(this.tableau));
  }
  onFileChange2(event) {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      this.profileForm['controls'].image.setValue(reader.result);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  onFileChange(event ){
    const file: File =  this.profileForm['controls'].image.value;
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
    reader.onloadend = (e) => {
      this.profileForm['controls'].image.setValue(reader.result);
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  processFile(imageInput: any) {
    // debugger;
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
    reader.readAsDataURL(file);
  }


}
