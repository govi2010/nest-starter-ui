import { Injectable } from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {createEmptyUser, User} from './user.model';

export const initialState: User = createEmptyUser();

export interface State extends EntityState<User> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends EntityStore<State, User> {

  constructor() {
    super(initialState);
  }

}

