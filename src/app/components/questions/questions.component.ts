import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/models/question';
import { Answer } from 'src/app/models/answer';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  result:string;
}

@Component({
  selector: 'dialog-data-result-dialog',
  templateUrl: 'dialog-data-result-dialog.html',
})
export class DialogDataResultDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
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
  result: string;
  constructor(private router: Router, private service: QuestionsService,public dialog: MatDialog) {
  }

  ngOnInit() {
    //console.log("ngOnInit fired");
    this.service.getFirstQuestion()
      .subscribe((question: Question) => this.question = question);
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

    this.service.calculate().subscribe((data: any) => {
      this.result= data.result;

      this.dialog.open(DialogDataResultDialog, {
        data: {
          result:  data.result
        }
      });
    });
  }

}


