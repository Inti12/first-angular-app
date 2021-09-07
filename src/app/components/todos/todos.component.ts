import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 

  inputTodo: string ="";
  todos: Todo[];
  constructor() { }

  ngOnInit(): void {

    this.todos = [

     
    ]
  }

toggleDone(id:number){
  this.todos.map((v,i)=>  {

  if (i == id) v.completed =!v.completed
    
  return v;
  } )

}


deleteTodo(id:number){
  this.todos = this.todos.filter((v, i )=>i !== id)
}

addTodo(){
this.todos.push({
  content: this.inputTodo,
  completed:false
});

}
}
