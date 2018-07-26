import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  message;
  name;
  description;
  createTask(){
    this.taskService.newTask(this.name, this.description).subscribe(data => {this.message = "success"}, error => {this.message="error"});
  }
}
