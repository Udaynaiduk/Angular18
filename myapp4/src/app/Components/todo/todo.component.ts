import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addtodo } from '../../ngrx/actions/doto.action';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
todo$=new Observable<any>
constructor(private store:Store<any>){
this.todo$=this.store.select('todo')
}
todoCompleted:boolean=false
todoTitle:string=''
todoId:number=0
ngAfterViewChecked(){
  console.log('Todo View Checked');
}
addtodo(){
  console.log(this.todoId,this.todoTitle,this.todoCompleted);
  this.store.dispatch(addtodo({todo: {id: this.todoId, title: this.todoTitle, completed: this.todoCompleted}}))
  this.todoId=0
  this.todoTitle=''
  this.todoCompleted=false
}
}
