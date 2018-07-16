import { Component, OnInit, Input} from '@angular/core';
import { User } from '../../shared/user.model';
// import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: User[];

  public user: User;

  constructor() { }

  ngOnInit() {
    this.user = this.users[0];
  }

  showDetails(index: number): void{
    this.user = this.users[index];
  }

 
}
