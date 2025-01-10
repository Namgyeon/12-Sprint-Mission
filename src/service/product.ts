import { ProductFormType } from "@schemas/product";
import { axiosInstance } from "@service/axios";
import { PaginationResponse } from "@type/common";
import {
  DeleteProductResponse,
  ImageUploadResponse,
  Product,
} from "@type/product";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await axiosInstance.get<PaginationResponse<Product>>(
    `/products?${query}`
  );

  return response.data;
}

export async function uploadProductImage(formData: FormData) {
  const response = await axiosInstance.post<ImageUploadResponse>(
    "/images/upload",
    formData
  );

  return response.data;
}

export async function addProduct(productData: ProductFormType) {
  const response = await axiosInstance.post<Product>("/products", productData);

  return response.data;
}

export async function modifyProduct(
  productId: number,
  productData: ProductFormType
) {
  const response = await axiosInstance.patch<Product>(
    `/products/${productId}`,
    productData
  );

  return response.data;
}

export async function deleteProduct(productId: number) {
  const response = await axiosInstance.delete<DeleteProductResponse>(
    `/products/${productId}`
  );

  return response.data;
}

export async function getProduct(productId: number) {
  const response = await axiosInstance.get<Product>(`/products/${productId}`);

  return response.data;
}

export async function toggleLike(productId: number, flag: boolean) {
  const response = await axiosInstance<Product>({
    method: flag ? "POST" : "DELETE",
    url: `/products/${productId}/favorite`,
  });

  return response.data;
}
