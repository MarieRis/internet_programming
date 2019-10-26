import { Component } from '@angular/core';
     
class Item{
    student: string;
    extra_points: number;
    marks: number;
    
     
    constructor(student: string, marks: number, extra_points: number) {
  
        this.student = student;
        this.marks = marks;
        this.extra_points = extra_points;
        
    }
}

@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> абитуриент 2020 </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(student, marks,extra_points)">списки битуриентов</button>
                </div>
            </div>
         <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(student, marks,extra_points)">минимальные баллы</button>
                </div>
            </div>
         <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(student, marks,extra_points)">время работы приемной комиссии</button>
                </div>
            </div>
            
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>конечная дата приема:</th>
                    <th>минимальные баллы последнего 
абитуриента</th>
                    <th>среднй балл</th>
                </tr>
            </thead>
 <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.student}}</td>
                    <td>{{item.marks}}</td>
                    <td>{{item.extra_points}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
    i
    addItem(student: string, extra_points: number, marks: number): void {
         
        if(student==null || student.trim()=="" || extra_points==null || marks==null )
            return;
        this.items.push(new Item(student, extra_points, marks));
    }
}