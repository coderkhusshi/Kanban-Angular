import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
  validateTask(tas:Task):Observable<Task>{
    return this.http.post<Task>("http://localhost:8081/KanbanApp/task/taskid",tas);
  }
  addTask(tas : Task):Observable<Task>{
    return this.http.post<Task>("http://localhost:8081/KanbanApp/task", tas);
  }
  showTask():Observable<Task[]>{
    // the result of get function. get fun will give you Observable<Customer[]>
    return this.http.get<Task[]>("http://localhost:8081/KanbanApp/task");
  }
}