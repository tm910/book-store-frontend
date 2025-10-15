import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '../../../utils/baseURL'

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/order`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token')
        if (token)
            Headers.set('Authorization', `Bearer ${token}`)
        return Headers
    }
})

const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery,
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        fetchAllOrders: builder.query({
            query: () => "/",
            providesTags: ['Orders']
        }),
        fetchOrderByEmail: (builder.query)({
            query: (email) => ({
                url: `/email/${email}`,
            }) ,
            providesTags: ["Orders"]
        }),
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: `/create-order`,
                method: "POST",
                body: newOrder, 
                credentials: "include"
            }),
            invalidatesTags: ["Orders"]
        }),
        updateOrder: builder.mutation({
            query: (id, ...rest) => ({
                url: `/edit/${id}`,
                method: "PATCH",
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ["Orders"]
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Orders"]
        })

    })
})

export const {
    useFetchAllOrdersQuery,
    useFetchOrderByEmailQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation } = orderApi
export default orderApi