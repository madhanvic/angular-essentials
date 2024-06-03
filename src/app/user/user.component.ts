import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ alias: 'id', required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Input() avatar!: string;
  @Output() select = new EventEmitter<string>();
  onSelectUser() {
    this.select.emit(this.userId);
  }
}
