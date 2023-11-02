import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
    endpoints: (builder) => ({
        getProductsData: builder.query({
            query: () => "/api/products"
        }),
    })
})

export const {useGetProductsDataQuery, useGetSingleProductQuery} = productApi