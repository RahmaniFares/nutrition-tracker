import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User, UsersData } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private usersSubject = new BehaviorSubject<User[]>(UsersData.users);
  private UserSubject = new BehaviorSubject<User | null>(null);
  readonly connectedUser$: Observable<User | null> = this.UserSubject.asObservable();
  users$ = this.usersSubject.asObservable();
  isUserConnected = this.connectedUser$.pipe(
    map(user  => user !== null)
  );






   login(username: string, password: string): boolean {
    const users = this.usersSubject.value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      this.UserSubject.next(user);
      return true;
    }
    return false;
  }

  logout(): void {
    this.UserSubject.next(null);
  }

  getConnectedUser(): User | null {
    return this.UserSubject.value;
  }

  register(newUser: User): boolean {
    const users = this.usersSubject.value;
    if (users.some(u => u.username === newUser.username)) {
      return false;
    }
    this.usersSubject.next([...users, newUser]);
    return true;
  }
}


