import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (buider) => ({
    getAllProduct: buider.query({
      query: () => "/products",
    }),
    getProductById: buider.query({
      query: (id) => `/products/${id}`,
    }),
    addNewProduct: buider.mutation({
      query: (newProduct) => ({
        url: "/products/add",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
  }),
})

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
} = productAPI
