import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task: any;

  constructor(private taskService: TaskService ) { }

  ngOnInit() {
  }

  onclick() {
    this.taskService.deleteById(this.task.id);
  }

}
