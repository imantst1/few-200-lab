import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectBookItems } from './reducers';
import { Observable } from 'rxjs';
import { BookItem } from './models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  items$: Observable<BookItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectBookItems);
  }

}
