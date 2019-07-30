import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: "feedback", component: FeedbackComponent},
  {path: "add-new-pet", component: CreateComponent},
  {path: '**', component: NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
