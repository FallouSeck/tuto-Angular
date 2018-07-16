import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewUserComponent } from './container/new-user/new-user.component';
import { UsersComponent } from './container/users/users.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './container/users/users-list/users-list.component';
import { UsersDetailsComponent } from './container/users/users-details/users-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UsersComponent,
    ContainerComponent,
    UsersListComponent,
    UsersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
