import {IProductFilter} from '../../models';

export const productQueryBuilder = (query: any): Partial<IProductFilter> => {
  const filterObject: Partial<IProductFilter> = {};

  const {priceGte, priceLte, title, ...otherValues} = query;
  const keys = Object.keys(otherValues) as Array<keyof IProductFilter>;

  keys.forEach((key) => {
    filterObject[key] = query[key];
  });

  if (priceGte) {
    filterObject.priceGte = {$gte: priceGte};
  }

  if (priceLte) {
    filterObject.priceLte = {$lte: priceLte};
  }

  if (title) {
    filterObject.title = { $regex: title, $options: 'i' };
  }

  return filterObject;
};
