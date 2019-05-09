import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

  add() {
    this.db.collection('items').add({
      timestamp: new Date()
    });
  }

}
