import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list-component',
  templateUrl: './my-list-component.component.html',
  styleUrls: ['./my-list-component.component.scss']
})
export class MyListComponentComponent implements OnInit {
  items = ['apple', 'banana', 'cherry',"Abc"];
  filterText = '';
  constructor() { }

  ngOnInit(): void {
  }

  filter() {
  }

  sort() {
    this.items.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });

}
}
