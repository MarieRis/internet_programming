import { Component } from '@angular/core';
     
class Faq{
    questions: string;
    
    
     
    constructor(questions: string) {
  
        this.questions = questions;
       
        
    }
}
 
@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> Часто задаваемые вопросы </h1>

    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="questions" placeholder = "введите вопрос" />
                </div>
           
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addFaq(questions)">Добавить</button>
                </div>
            </div>
            
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>вопрос</th>
                    
                </tr>
            </thead>
 <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.questions}}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>`
})
export class FaqComponent { 
    faq: Faq[] = 
    [
        { questions: "абитуриент1" },
       
    ];
    addFaq(questions: string): void {
         
        if(questions==null )
            return;
        this.questions.push(new Faq(questions));
    }
}
 
    