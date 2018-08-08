import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {


  @Input() task: {
    taskName : string,
    taskDescription : string,
    id : string,
    done : boolean,
    UserId : string
  };
  

  constructor(private taskService: TaskService , private loginService : LoginService) { }

  ngOnInit() {
  }

  onclick() {
    this.taskService.deleteById(this.task.id);
  }

  onDone(){
    this.taskService.toggleTask(this.task.id,this.task);
  }

}
