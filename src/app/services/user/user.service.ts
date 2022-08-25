import { Injectable } from '@angular/core';
import { UserClass } from 'src/app/models/user-class.model';
import { CollectionServiceService } from "src/app/memory/collection-service.service";
import { ScoreClass } from "../../models/score-class.model";
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUser {

  constructor() { }

  getActiveUser(): UserClass {
   return  CollectionServiceService.users[0]
  }

getUsers(): UserClass[] {
   return  CollectionServiceService.users
}
 
}
