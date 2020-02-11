import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  profileForm :FormGroup;
  tableau : any[];
  index: number;
  msgError: string;
 
 
   constructor() {
     
    }
 
    ngOnInit(){
      this.profileForm = new FormGroup({
        email: new FormControl('',[Validators.required, Validators.email]),
        username: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      
      });
     
      this.tableau=JSON.parse(localStorage.getItem('users'));
    }
   
  

   addUser(){

    const user = this.tableau.find(item => item.username === this.profileForm.controls.username.value);
   
    if(!user){
      this.tableau.push(this.profileForm.value);
      console.log(this.profileForm.value)
      localStorage.setItem('users',JSON.stringify(this.tableau));
    }else {
      this.msgError = "Username existe déja"
    }
      
    }

    
  


  }
