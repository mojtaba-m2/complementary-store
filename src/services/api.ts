import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getProducts() {
  const data = await client("/supplements");

  return data.data;
}

export async function getProduct(id: string | number) {
  const productData = await client(`/supplements/${id}`);

  return productData.data;
}
