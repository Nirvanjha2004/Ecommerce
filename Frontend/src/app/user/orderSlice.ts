import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
    id: string;
    name: string;
    price: string;
    image_url: string;
}

interface OrderState {
    currentOrder: Order[],

}

const initialState: OrderState = {
    currentOrder: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        orderSuccess(state, action: PayloadAction<Order>) {
            return { 
                ...state,
                currentOrder: [...state.currentOrder, action.payload]}
    }},
});

export const { orderSuccess } = orderSlice.actions;

export default orderSlice.reducer;
