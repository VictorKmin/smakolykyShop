import {Document, Model, model, Schema} from 'mongoose';

import {ICart} from '../../models';
import {CartStatusEnum, TableNamesEnum} from '../../constatns';

export type CartType = ICart & Document

const productSubModel = {
  productId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: false
  }
};

export const CartSchema: Schema = new Schema<ICart>({
  products: [productSubModel],
  userId: {
    type: Schema.Types.ObjectId,
    ref: TableNamesEnum.USER
  },
  status: {
    type: String,
    required: true,
    default: CartStatusEnum.IN_PROGRESS,
    enum: Object.values(CartStatusEnum)
  },
  sum: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

export const CartModel: Model<CartType> = model<CartType>(TableNamesEnum.CART, CartSchema);
