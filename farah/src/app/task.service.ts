import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskComponent } from './task/task.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  newTask(name: string, description: string) { // TODO: userid
    return this.http.put<any> ("http://localhost:8081/tasks", {taskName: name, taskDescription: description, UserId: "5b595b41b89a4a109bd05b68" })
  }

  getTasks(){
    // let userId = this.loginService.userId
    let userId = 'mehrab';
    return this.http.get<any>('http://localhost:8080/tasks/all/'+userId)
  }

  deleteById(id: string) {

  }

  toggleTask(id:string, task : any){
    return this.http.put<any>("http://localhost:8080/tasks/done"+id,task)
  }
}
