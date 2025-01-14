import { NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss',
    imports: [RouterOutlet, NgFor, NgIf]
})

export class UsersComponent {
    readonly apiService = inject(HttpClient);
    users: any = [];

    constructor() {
        this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
            (respons: any) => {
                this.users = respons;
                console.log('USERS:', 'this.users')
            }
        )
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            // @ts-ignore
            item => {
                if (id === item.id) {
                    return false   
                }   
                    else {
                        return true
                    }
            }
        )
    }
}