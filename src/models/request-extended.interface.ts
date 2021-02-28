import {Request} from 'express';

import {IUser} from './user.interface';
import {IProduct} from './product.interface';
import {IStore} from './store.interface';

export interface IRequestExtended extends Request{
  user?: IUser
  product?: IProduct
  store?: IStore
}
