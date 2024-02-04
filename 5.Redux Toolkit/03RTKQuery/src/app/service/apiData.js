import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (buider) => ({
    getAllProduct: buider.query({
      query: () => "/products",
    }),
  }),
})

export const { useGetAllProductQuery } = productAPI
