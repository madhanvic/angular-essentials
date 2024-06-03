import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './dummy-users';
import { CommonModule, JsonPipe } from '@angular/common';

//Interface
import { User } from './interface/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser: User | null = null;
  onSelectUser = (id: string) => {
    const user = this.users.find((user: User) => user.id === id);
    this.selectedUser = user ? user : null;
  };
}
