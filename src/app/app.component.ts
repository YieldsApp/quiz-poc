import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yieldsApp diseases identification module';

  constructor(private router: Router) { }

  goToQuestions(): void {
    this.router.navigateByUrl('/smart-ai-recognition');
  }
}
