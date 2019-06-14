import { Component, OnInit } from '@angular/core';
import { TodosDataService } from '../todo-list/todos-data.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  count$: Observable<number>;
  constructor(private service: TodosDataService) { }

  ngOnInit() {
    // TODO
    // this.count$ = this.service.getAll()
    //   .pipe(
    //     map(todo => todo.map(t=> t.completed)),
    //     filter(completed => completed.map(c=> c))
    //   );
  }

}
