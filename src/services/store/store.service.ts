import {StoreModel} from '../../database';
import {IStore} from '../../models';

class StoreService {
  findStoreById(storeId: string): Promise<IStore | null> {
    return StoreModel.findById(storeId).exec();
  }
}

export const storeService = new StoreService();
