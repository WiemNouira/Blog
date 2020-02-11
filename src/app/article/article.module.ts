import { NgModule } from '@angular/core';

import { CKEditorModule } from 'ckeditor4-angular';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { AuthGuardGuard } from '../auth-guard.guard';


import { AddArticleComponent } from './add-article/add-article.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { SearchPipe } from '../search.pipe';
import { MyarticlesPipe } from '../myarticles.pipe';
import { MyArticlesComponent } from './my-articles/my-articles.component';

const appRoutes: Routes = [
  { 
   /* path:'Articles', 
    children: [ { path: 'ListArticles', component: AllArticlesComponent , canActivate: [AuthGuardGuard]},
    { */
       path: '', component: AllArticlesComponent, canActivate: [AuthGuardGuard]},
    { path: 'MyArticles', component: MyArticlesComponent , canActivate: [AuthGuardGuard]},
    { path: 'AddArticle', component: AddArticleComponent, canActivate: [AuthGuardGuard]},
    { path: 'UpdateArticle/:id', component: UpdateArticleComponent, canActivate: [AuthGuardGuard]},
  ]
 

@NgModule({
  declarations: [
    AddArticleComponent,
    AllArticlesComponent,
    UpdateArticleComponent,
    MyArticlesComponent,
    SearchPipe,
    MyarticlesPipe,
    

  ],
  imports: [
    SharedModule,
    CKEditorModule,
    RouterModule.forChild(appRoutes),
  ],
})
export class ArticleModule { }
