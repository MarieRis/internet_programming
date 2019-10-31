import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 
import {Routes, RouterModule} from '@angular/router';
 
import { AppComponent }   from './app.component';
import { FaqComponent }   from './faq.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';
 
 
import { ItemComponent }   from './item.component';
 
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: FaqComponent},
    { path: 'item/:id', component: ItemComponent},
    { path: '**', component: NotFoundComponent }
];
 
@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [ 
                    AppComponent, HomeComponent, 
                    FaqComponent, NotFoundComponent, 
                    ItemComponent
                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }