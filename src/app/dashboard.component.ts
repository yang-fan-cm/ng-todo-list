import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service'

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./app.component.css'] 
})

export class DashboardComponent implements OnInit {
  todos: Todo[] = [];
  
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
  	this.todoService.getTodos().then(
  		todos => this.todos = todos.slice(1, 5)   //Select four(2, 3, 4, 5) todos
  		)
  }
}