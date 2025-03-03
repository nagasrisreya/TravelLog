import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Error in getting products:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const createProduct = async (req, res) => {
    const { name, description, image, state } = req.body;

    console.log("Received Product Data: ", req.body);

    if (!name || !description || !image|| !state) {
        return res.status(400).json({ success: false, message: "Please fill all fields" });
    }

    try {
        const newProduct = new Product({ name, description, image, state });
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in creating product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid product ID" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error in updating product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid product ID" });
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error in deleting product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const getProduct = async (req, res) => {
    const { name, page = 1, limit = 10 } = req.query; // Default page 1 and limit 10

    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a product name" });
    }

    try {
        const products = await Product.find({ name: { $regex: name, $options: 'i' } })
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Product.countDocuments({ name: { $regex: name, $options: 'i' } });

        if (products.length === 0) {
            return res.status(404).json({ success: false, message: "No products found with the given name" });
        }

        res.status(200).json({ 
            success: true, 
            data: products,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        console.error("Error fetching products by name:", error.message);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};
