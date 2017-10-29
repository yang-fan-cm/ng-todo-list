import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './mock-todos';

@Injectable()

export class TodoService {
	/*
	getTodos(): Todo[] {	//Get all todo tasks (from mock todo data)
		return TODOS;
	}
	*/
  getTodos(): Promise<Todo[]> {	//Update the TodoService with the Promise-return getTodos() method
	return Promise.resolve(TODOS);
  }

  getTodo(id: number): Promise<Todo> {	//Get a todo with id
  	return this.getTodos().then(todos => todos.find(todo => todo.id === id));
  }
}