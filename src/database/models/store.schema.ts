import {Document, Model, model, Schema} from 'mongoose';

import {IStore} from '../../models';
import {TableNamesEnum} from '../../constatns';

export type StoreType = IStore & Document

export const StoreSchema: Schema = new Schema<IStore>({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const StoreModel: Model<StoreType> = model<StoreType>(TableNamesEnum.STORE, StoreSchema);
