import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: any[];
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    // this.db.collection('items').snapshotChanges().subscribe(data => {
    //   this.items = data;
    // });
    this.db.collection('items').snapshotChanges().subscribe(data => {
      this.items = [];
      data.forEach(a => {
        const item: any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
      });
    });
  }

  add() {
    this.db.collection(`items`).add({
      timestamp: new Date()
    });
  }

  update(item) {
    this.db.doc(`items/${item.id}`).update({
      timestamp: new Date()
    });
  }

  delete(item) {
    this.db.doc(`items/${item.id}`).delete();
  }

}
