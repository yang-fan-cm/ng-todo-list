import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
//import { TODOS } from './mock-todos';
//Instead of import TODOS from mock-todos.ts, we use todo service to import the data
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]  
  //The providers array  tells Angular to create a fresh instance of the TodoService
  //when it creates an AppComponent. 
  //The AppComponent, as well as its child components, can use that service to get todo data.
})

export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {} 
  //Supply an instance of the TodoService when it creates an AppComponent 

  title = 'My Todo List';
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
}
