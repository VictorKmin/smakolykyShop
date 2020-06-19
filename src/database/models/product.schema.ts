import {Document, Model, model, Schema} from 'mongoose';

import {IProduct} from '../../models';
import {ProductTypeEnum, TableNamesEnum} from '../../constatns';

export type ProductType = IProduct & Document

export const ProductSchema: Schema = new Schema<IProduct>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: Object.values(ProductTypeEnum)
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  hasDiscount: {
    type: Boolean,
    required: false,
    default: false
  },
  oldPrice: {
    type: Number,
    required: false
  },
  tags: {
    type: Array,
    required: false
  },
  photos: {
    type: Array,
    required: false
  },
  docs: {
    type: Array,
    required: false
  },
  stockCount: {
    type: Number,
    required: true,
    default: 0
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: TableNamesEnum.USER
  }
}, {
  timestamps: true
});

export const ProductModel: Model<ProductType> = model<ProductType>(TableNamesEnum.PRODUCTS, ProductSchema);
