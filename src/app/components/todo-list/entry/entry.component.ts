import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  add(what: HTMLInputElement) {
    // let the momma-poppa know...
    this.itemAdded.emit(what.value);
    what.value = '';
    what.focus(); // 'focus' just puts the cursor back in that element.
  }

}
