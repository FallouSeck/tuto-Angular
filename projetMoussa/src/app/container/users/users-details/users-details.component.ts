import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/user.model';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  @Input() user: User;
  
  constructor() { }

  ngOnInit() {
  }

}
