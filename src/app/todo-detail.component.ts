import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
	selector: 'todo-detail',
	templateUrl: './todo-detail.component.html',
	styleUrls: ['./app.component.css']
})

export class TodoDetailComponent {
	@Input() todo: Todo;
}
