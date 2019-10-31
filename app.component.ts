import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { NgModel} from '@angular/forms';
  
@Component({
    selector: 'my-app',
    template: `<div>
                    <nav>
                        <a routerLink="">Главная</a>
                        <a routerLink="/about">  FAQ</a>
                        <a [routerLink]="['item', '5']">  Ввод абитуриентов</a>
                    </nav>
                    <router-outlet></router-outlet>
               </div>`

})
export class AppComponent {}