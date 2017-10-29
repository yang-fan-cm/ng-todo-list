import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from './todo';
//import { TODOS } from './mock-todos';
//Instead of import TODOS from mock-todos.ts, we use todo service to import the data
import { TodoService } from './todo.service';  

@Component({
  selector: 'todos-list',
  templateUrl: './todos.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [TodoService]   Move providers to app.module.ts
  //The providers array  tells Angular to create a fresh instance of the TodoService
  //when it creates an TodosComponent. 
  //The TodosComponent, as well as its child components, can use that service to get todo data.
})

export class TodosComponent implements OnInit {
  constructor(
  	private todoService: TodoService,
  	private router: Router) {} 
  //Supply an instance of the TodoService when it creates an TodosComponent 

  //todos = TODOS;
  selectedTodo : Todo;  
  todos: Todo[];

  ngOnInit(): void {	//At the Init stage of lifecycle, get all todo data so that it can be displayed
  	this.getTodos();
  }

  onSelect(todo: Todo): void {
  	this.selectedTodo = todo;
  	//alert(this.selectedTodo.task);
  }

  getTodos(): void {
  	//this.todos = this.todoService.getTodos();
  	this.todoService.getTodos().then(todos => this.todos = todos);
  	//Pass the callback function as an argument to the Promise's then() method
  }

  gotoDetail(): void {
  	this.router.navigate(['/detail', this.selectedTodo.id]);
  }
}
