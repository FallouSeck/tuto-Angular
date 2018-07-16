import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../shared/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];
  @Output () pickEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  showDetails(index: number): void{
    this.pickEvent.emit(index);
  }

}
