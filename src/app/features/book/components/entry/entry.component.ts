import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { bookAddedToList } from '../../actions/list.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(title: HTMLInputElement, author: HTMLInputElement, format: HTMLInputElement) {
    const bookTitle = title.value.toString();
    const bookAuthor = author.value.toString();
    const bookFormat = format.value.toString();
    // this.store.dispatch(itemAddedToList({ bookTitle, bookAuthor, bookFormat }));
    this.store.dispatch(bookAddedToList({ title: bookTitle, author: bookAuthor, format: bookFormat }));



  }
}

