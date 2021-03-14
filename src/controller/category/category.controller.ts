import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../models';
import {categoryService} from '../../services';

class CategoryController {
  async getCategories(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const query = req.query;

      const categories = await categoryService.getCategories(query);

      res.json(categories);
    } catch (e) {
      next(e);
    }
  }
}

export const categoryController = new CategoryController();
