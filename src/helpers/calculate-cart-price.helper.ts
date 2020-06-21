import {ICartProduct} from '../models';

export const calculateCartPrice = (cartProducts: ICartProduct[]): number => {
  return cartProducts.reduce((previousValue, currentValue) => {
    previousValue += currentValue.price;

    return previousValue;
  }, 0);
};
