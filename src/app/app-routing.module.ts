import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  { path: 'smart-ai-recognition', component: QuestionsComponent },
  { path: '',  redirectTo: '/smart-ai-recognition', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
