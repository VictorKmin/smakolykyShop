import {Document, Model, model, Schema} from 'mongoose';

import {IAccessToken} from '../../models';
import {TableNamesEnum} from '../../constatns';

export type AccessTokenType = IAccessToken & Document

export const AccessTokenSchema: Schema = new Schema<IAccessToken>({
  accessToken: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: TableNamesEnum.USER
  }
}, {
  timestamps: true
});

export const AccessTokenModel: Model<AccessTokenType> = model<AccessTokenType>(TableNamesEnum.ACCESS_TOKEN, AccessTokenSchema);
