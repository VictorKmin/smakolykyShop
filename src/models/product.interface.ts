import {ProductTypeEnum} from '../constatns';

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  type: ProductTypeEnum
  category: string;
  price: number;
  hasDiscount: boolean;
  oldPrice?: number;
  tags?: string[];
  photos?: string[];
  docs?: string[];
  stockCount: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductFilter {
  title?: { $regex: string, $options: string };
  price?: { $gte: number, $lte: number };
  category?: string;
  tags?: string | string[];
  hasDiscount?: boolean
}

export interface IProductFilterQuery {
  title?: string;
  priceGte?: number;
  priceLte?: number;
  category?: string;
  tags?: string
  hasDiscount?: boolean
}

