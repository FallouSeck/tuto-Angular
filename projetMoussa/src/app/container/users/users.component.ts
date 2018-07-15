import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }
 
}
