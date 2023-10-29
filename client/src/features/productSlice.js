import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: false
}

export const fetchAllProducts = createAsyncThunk(
    'name/product',
    async () => {
        const response = await fetch("http://localhost:8080/api/products")
        const data = await response.json()
        return data
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getSingleProduct: (state, action) => {
            state.products._id = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.loading = true,
                state.error = false
        }),
            builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.products = action.payload
            }),
            builder.addCase(fetchAllProducts.rejected, (state, action) => {
                state.error = true
                state.loading = false
            })
    }
})

export const { getSingleProduct } = productSlice.actions
export default productSlice.reducer