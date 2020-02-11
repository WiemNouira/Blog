import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { LogoutGuard } from './logout.guard';
import { RegisterComponent } from './register/register.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent , canActivate: [AuthGuardGuard]},
  { path: 'AddUser', component: RegisterComponent, canActivate: [AuthGuardGuard]},
  { path: 'Register', component: RegisterComponent, canActivate: [AuthGuardGuard]},
  { path: 'Login', component: LoginComponent, canActivate: [AuthGuardGuard]},
  { path: 'Articles',loadChildren: './article/article.module#ArticleModule'}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
