import {Injectable} from '@angular/core';
import {UserStore} from './user.store';
import {UserDataService} from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userStore: UserStore,
              private userDataService: UserDataService) {
  }

  get() {
    // this.userDataService.get().subscribe((entities: ServerResponse) => {
      // this.userStore.set(entities);
    // });
  }

  add() {
    // this.userDataService.post().subscribe((entity: ServerResponse) => {
      // this.userStore.add(entity);
    // });
  }
}
