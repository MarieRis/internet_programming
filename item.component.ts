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
        <h1>  Список абитуриентов </h1>

    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="student" placeholder = "ФИО абитуриента" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="marks" placeholder="баллы" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(student, marks,extra_points)">Добавить</button>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="extra_points" placeholder="допбаллы" />
                </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>абитуриент</th>
                    <th>баллы</th>
                    <th>дополнительные баллы</th>
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
export class ItemComponent { 
    items: Item[] = 
    [
        { student: "абитуриент1", extra_points: 5, marks: 127 },
        { student: "абитуриент1", extra_points: 0, marks: 150 },
        { student: "абитуриент1", extra_points: 2, marks: 250 },
        { student: "абитуриент1", extra_points: 3, marks:200 }
    ];
    addItem(student: string, extra_points: number, marks: number): void {
         
        if(student==null || student.trim()=="" || extra_points==null || marks==null )
            return;
        this.items.push(new Item(student, extra_points, marks));
    }
}