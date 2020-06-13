import {ActionEnum} from '../constatns';

export interface IUserToken {
  token?: string,
  action?: ActionEnum
}

export interface IUser {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
  age: number;
  phone?: string;
  gender?: string;
  photo?: string;
  status: string;
  tokens?: [IUserToken];
  createdAt: string;
}
