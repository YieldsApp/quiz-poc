import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  name: string;
  probability: number;
}

@Component({
  selector: 'dialog-data-result-dialog',
  templateUrl: 'dialog-data-result-dialog.html',
})
export class DialogDataResultDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  providers: [QuestionsService]
})
export class QuestionsComponent implements OnInit {
  question: Question;
  selectedAnswer: number;
  result: DialogData;
  url: string;
 

  constructor(private router: Router, private service: QuestionsService, public dialog: MatDialog) {
  }

  ngOnInit() {
    //console.log("ngOnInit fired");
    this.service.getFirstQuestion()
      .subscribe((question: Question) => this.question = question);
  }


  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
}
  goToNextQuestion() {

    var answer = new Answer();
    answer.id = this.selectedAnswer;

    this.service.addAnswer(this.question, answer);
    this.service.getNextQuestion(this.question, answer)
      .subscribe((question: Question) => {
        this.question = question;
        this.selectedAnswer = null;
      });
  }


  calculate() {
    var answer = new Answer();
    answer.id = this.selectedAnswer;

    this.service.addAnswer(this.question, answer);

    if (this.result) {
      this.showDialogResult();
      return;
    }

    this.service.calculate().subscribe((data: any) => {
      this.result = data;
      this.showDialogResult();
    });
  }

  showDialogResult(): void {
    this.dialog.open(DialogDataResultDialog, {
      data: this.result
    });
  }

}



