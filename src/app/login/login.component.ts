import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm: FormGroup;
  tableau : any[]; 
  index: number;
  msgError: string;
  constructor(private router: Router) { }
  ngOnInit(){
    this.profileForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    
    });
   
    this.tableau=JSON.parse(localStorage.getItem('users'));
  }

  login(){
    const user = this.tableau.find(item => item.username === this.profileForm.controls.username.value);
    const pwd = this.tableau.find(item => item.password === this.profileForm.controls.password.value);
   
    if(!user || !pwd){
      this.msgError = "Compte non exsitant"
    }else {
      this.router.navigateByUrl('/ListArticles');  
      console.log(this.profileForm.value);
      localStorage.setItem('user',JSON.stringify(this.profileForm.controls.username.value));
    }
    
     
  }

}

