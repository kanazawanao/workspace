import { IUser } from '@workspace/api-interfaces';

export class UsersEntryModel implements IUser {
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  email: string = '';
  birthDay: Date = new Date();
  sex: string = '';
  address: string = '';
  qualification: string = '';
  graduationDate: Date = new Date();
}
