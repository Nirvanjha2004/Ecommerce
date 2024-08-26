import mongoose from "mongoose";

interface orderSchemas {
    id: number;
    title: string;
    description: string;
    price: number;
}
const orderSchema = new mongoose.Schema<orderSchemas>({
    title: String,
    description: String,
    price: Number,
    id: Number
})


export const order = mongoose.model('order', orderSchema);