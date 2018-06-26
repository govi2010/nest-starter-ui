import {ID} from '@datorama/akita';

export interface User {
  id: ID;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Creds {
  email?: string;
  password: string;
  username?: string;
}

/**
 * A factory function that creates User
 * @param params
 */
export function createUser(params: Partial<User>) {
  return {
    id: params.id,
    password: params.password,
    username: params.username,
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email
  } as User;
}

export function createEmptyUser() {
  return {
    id: null,
    password: '',
    username: '',
    firstName: '',
    lastName: '',
    email: ''
  } as User;
}
