import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    quantity: Number,
    description: String,
    tagline: String,
    price: Object,
});

const Product = mongoose.model ('product', productSchema);

export default Product;

