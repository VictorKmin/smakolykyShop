import {ProductModel} from '../../database';
import {IProduct, IProductFilter} from '../../models';

class ProductService {
  createProduct(product: IProduct) {
    const productToSave = new ProductModel(product);

    return productToSave.save();
  }

  findProductById(productId: string): Promise<IProduct | null> {
    return ProductModel.findById(productId).lean().exec();
  }

  findProducts(filterQuery: Partial<IProductFilter>, limit: number, page: number): Promise<IProduct[] | []> {
    const skip = limit * (page - 1);

    return ProductModel.find(filterQuery).limit(limit).skip(skip).lean().exec();
  }

  findProductsInternal(filterQuery: Partial<IProductFilter>): Promise<IProduct[] | []> {
    return ProductModel.find(filterQuery).lean().exec();
  }

  updateProductById(_id: string, updateObject: Partial<IProduct>): Promise<IProduct | null> {
    return ProductModel.findOneAndUpdate({_id}, updateObject, {new: true}).lean().exec();
  }
}

export const productService = new ProductService();
