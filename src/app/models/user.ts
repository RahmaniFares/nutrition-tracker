export class User {
  username!: string;
  password!: string;
  email!: string;
  //additional properties can be added as needed
  firstname?: string;
  lastname?: string;
  age?: number;
  address?: string;
  phone?: string;


}
export class UsersData {
  static users: User[] = [
      { username: 'test', password: 'test', email: 'test@example.com' },
      { username: 'fares', password: 'fares', email: 'fares@example.com' }
    ];
}
