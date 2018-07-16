import { Component, OnInit } from '@angular/core';
import { User} from '../shared/user.model';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public users : User[] = [
    new User ('Seck', 'Fadel', '19/07/1992'),
    new User ('Seck', 'Mariamawit', '10/10/1992'),
    new User ('Seck', 'Mame Thiané', '28/08/1996')
  ];

  public user: User;
  
  constructor() { }

  ngOnInit() {
    this.user = this.users[0];
  }

  // addUser(reference: any){
  //   this.users.push(reference.value);
  // }
    showDetails(index: number): void {
      this.user = this.users[index];
    }

}
