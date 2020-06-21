import {Request} from 'express';

import {IUser} from './user.interface';
import {IProduct} from './product.interface';

export interface IRequestExtended extends Request{
  user?: IUser
  product?: IProduct
}
