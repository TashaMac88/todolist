import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }
  //retrieve information from function

  getToDoList() {
    this.toDoList = this.firebasedb.list('title');
    return this.toDoList;
  }
  //add item into the database, is checked indicates if item has been done or not
  addTitle(title: string) {
    this.toDoList.push({
      title: title,
      isChecked: false
    });
  }



  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
  }

  //remove from db
  removeTitle($key: string) {
    this.toDoList.remove($key);
  }

}

