import {CategoryModel} from '../../database';
import {ICategory} from '../../models';

class CategoryService {
  // TODO queryBuilder
  getCategories(filterObject: any): Promise<ICategory[] | []> {
    return CategoryModel.find(filterObject).lean().exec();
  }
}

export const categoryService = new CategoryService();
