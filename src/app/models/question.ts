import { Answer } from './answer';

export class Question {

    public id: number;
    public text: string;
    public isLast: boolean;
    public answers: Answer[] 
}
