import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormArray } from '@angular/forms';
import { SearchPipe } from 'src/app/search.pipe';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent implements OnInit {

 
  form: FormGroup;
  profileForm :FormGroup;
  tableau : any;
  filterTab: any;
  searchText: string;
  
  CommentForm :FormGroup;
  tableauCom : any[];
  user:String;
  inputValue:String;
    constructor() {
      this.tableau=JSON.parse(localStorage.getItem('articles'));
      this.filterTab=JSON.parse(localStorage.getItem('articles'));
      this.user=JSON.parse(localStorage.getItem('user'));
      this.CommentForm = new FormGroup({
        content: new FormControl('',[Validators.required]),
        user: new FormControl(this.user,[Validators.required]),
        article: new FormControl('',[Validators.email]),
        dateComment: new FormControl(new Date()),
       
      });
     
      this.tableauCom=JSON.parse(localStorage.getItem('comments'));
     

     }
  
    ngOnInit() {
      this.tableau=JSON.parse(localStorage.getItem('articles'));

      
    }

    filterTableau() {
      const pipe = new SearchPipe();
      this.filterTab =  pipe.transform(this.tableau, this.searchText);
    }

    updateArticle(id) {
   
      this.form.setValue({
        title:this.tableau[id].title,
        content:this.tableau[id].content,
        image:this.tableau[id].image,
        owner:this.tableau[id].owner,
      })
       
          this.tableau[id].setValue(this.form.value);
        
       
    } 
    
    deleteArticle(i){
      
      this.tableau.splice(i,1);
      localStorage.setItem('articles',JSON.stringify(this.tableau));
  
      }
      
      addComment(){
        
        this.tableauCom=JSON.parse(localStorage.getItem('comments'));
        this.tableauCom.push(this.CommentForm.value);
        localStorage.setItem('comments',JSON.stringify(this.tableauCom));
      }

   

}
