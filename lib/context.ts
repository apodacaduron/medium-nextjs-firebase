import firebase from 'firebase';
import { createContext } from 'react';

export type UserContext = {
  user?: firebase.User | null
  username?: string | null
}

export const UserContext = createContext<UserContext>({ user: null, username: null })