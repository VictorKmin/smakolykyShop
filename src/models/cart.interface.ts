import {CartStatusEnum} from '../constatns';

export interface ICartProduct {
  productId: string;
  count: number;
  price: number;
}

export interface ICart {
  _id: string;
  products: ICartProduct[];
  userId: string;
  status: CartStatusEnum
  sum: number;
  createdAt: string;
  updatedAt: string;
}
