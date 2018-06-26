import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserStore, State } from './user.store';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserQuery extends QueryEntity<State, User> {

  constructor(protected store: UserStore) {
    super(store);
  }

}
