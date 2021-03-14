import {IProductFilter, IProductFilterQuery} from '../../models';

export const productQueryBuilder = (query: Partial<IProductFilterQuery>): Partial<IProductFilter> => {
  const filterObject: Partial<IProductFilter> = {};

  const keys = Object.keys(query) as Array<keyof IProductFilterQuery>;

  keys.forEach((key) => {
    switch (key) {
      case 'priceGte':
        filterObject.price = Object.assign({}, filterObject.price, {$gte: Number(query.priceGte)});
        break;
      case 'priceLte':
        filterObject.price = Object.assign({}, filterObject.price, {$lte: Number(query.priceLte)});
        break;
      case 'tags':
        // TODO tags array
        break;
      case 'title':
        filterObject.title = {$regex: query.title as string, $options: 'i'};
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filterObject[key] = query[key];
    }
  });

  return filterObject;
};
