import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-tasks-lists',
  templateUrl: './tasks-lists.component.html',
  styleUrls: ['./tasks-lists.component.scss']
})
export class TasksListsComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  tasks = []

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    }, error => {
      console.log(error);
    });
  }
}
