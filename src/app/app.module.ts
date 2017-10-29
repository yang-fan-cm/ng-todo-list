import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { TodoDetailComponent } from './todo-detail.component';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoDetailComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: TodosComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: TodoDetailComponent
      }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})


export class AppModule { }
