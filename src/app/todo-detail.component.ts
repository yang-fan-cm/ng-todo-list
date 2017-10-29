import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./app.component.css']
})

export class TodoDetailComponent implements OnInit {
  todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
	//@Input() todo: Todo;
  ngOnInit(): void {
  	this.route.paramMap.switchMap( (params: ParamMap) => 
      this.todoService.getTodo(+params.get('id'))  ).subscribe(todo => this.todo = todo);
  }

  goBack(): void {
  	this.location.back();
  }
}
