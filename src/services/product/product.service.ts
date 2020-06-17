import {ProductModel} from '../../database';
import {IProduct} from '../../models';

class ProductService {
  createProduct(product: IProduct) {
    const productToSave = new ProductModel(product);

    return productToSave.save();
  }
}

export const productService = new ProductService();
