import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  newTask(name: string, description: string) { // TODO: userid
    return this.http.put<any> ("http://localhost:8081/tasks", {taskName: name, taskDescription: description, UserId: "5b595b41b89a4a109bd05b68" })
  }

  deleteById(id: string) {

  }
}
