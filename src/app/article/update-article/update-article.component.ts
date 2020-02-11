import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit {

  profileForm :FormGroup;
  tableau : any;
  id: any;
  
      constructor(private route:ActivatedRoute) {
     
     }
  
    ngOnInit() {

      this.id =this.route.snapshot.paramMap.get('id');
      this.tableau=JSON.parse(localStorage.getItem('articles'));
      
      this.profileForm = new FormGroup({
        title: new FormControl(this.tableau[this.id].title),
        content: new FormControl(this.tableau[this.id].content),
        owner: new FormControl(this.tableau[this.id].owner),
        image: new FormControl(this.tableau[this.id].image),
        category:new FormControl(this.tableau[this.id].category),
      });
      
    }
    onFileChange(event) {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        this.profileForm['controls'].image.setValue(reader.result);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
   
    updateArticle(){
       this.tableau[this.id]=this.profileForm.value;
       localStorage.setItem('articles',JSON.stringify(this.tableau));
     }
}
