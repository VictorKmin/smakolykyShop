import {Document, Model, model, Schema} from 'mongoose';

import {IUser} from '../../models';
import {TableNamesEnum, UserRoleEnum, UserStatusEnum} from '../../constatns';

export type UserType = IUser & Document

const tokenSubModel = {
  token: String,
  action: String
};

export const UserSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: UserRoleEnum.USER
  },
  age: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  photo: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true,
    default: UserStatusEnum.PENDING
  },
  tokens: [tokenSubModel]
}, {
  timestamps: true
});

export const UserModel: Model<UserType> = model<UserType>(TableNamesEnum.USER, UserSchema);
