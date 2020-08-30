import {ProductModel} from '../../database';
import {IProduct} from '../../models';

class ProductService {
  createProduct(product: IProduct) {
    const productToSave = new ProductModel(product);

    return productToSave.save();
  }

  findProductById(productId: string): Promise<IProduct | null> {
    return ProductModel.findById(productId).exec();
  }

  updateProductById(_id: string, updateObject: Partial<IProduct>): Promise<IProduct | null> {
    return ProductModel.findOneAndUpdate({_id}, updateObject, {new: true}).exec();
  }
}

export const productService = new ProductService();
