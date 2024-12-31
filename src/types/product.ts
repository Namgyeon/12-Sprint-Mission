export type Product = {
  createdAt: string;
  updatedAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: Tags;
  price: number;
  description: string;
  name: string;
  id: number;
  isFavorite: boolean;
};

export type Tags = string[];

export type ProductList = {
  totalCount: number;
  list: Product[];
};

export type ImageUploadResponse = {
  url: string;
};

export type DeleteProductResponse = {
  id: number;
};
