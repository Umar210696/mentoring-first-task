import { NgFor } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { TodoCardComponent } from "./todo-card/todo-card.component";

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent ],
})

export class TodosComponent {

    readonly todosApiservice = Inject(TodosComponent)
    todos: any = [];

    constructor() {
        this.todosApiservice.getUsers().subscribe(
            (respons: any) => {
                this.todos = respons
            }
        )
    }
       
}