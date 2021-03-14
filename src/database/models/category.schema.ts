import {Document, Model, model, Schema} from 'mongoose';

import {ICategory} from '../../models';
import {TableNamesEnum} from '../../constatns';

export type CategoryType = ICategory & Document

export const CategorySchema: Schema = new Schema<ICategory>({
  name: {type: String, trim: true, required: true}
}, {
  timestamps: true
});

export const CategoryModel: Model<CategoryType> = model<CategoryType>(TableNamesEnum.CATEGORY, CategorySchema);
