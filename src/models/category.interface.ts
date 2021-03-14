import {Types} from 'mongoose';

export interface ICategory {
  _id: Types.ObjectId | string,
  name: string
}
