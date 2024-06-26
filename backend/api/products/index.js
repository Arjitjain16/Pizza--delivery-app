// import dbConnect from "../../../util/mongo";
import dbConnect from "../../../backend/server.js"
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method } = req;

    // Establish database connection
    await dbConnect();

    if (method === "GET") {
        // Handle GET request if needed
        // Example: Return a list of products
        try {
            const products = await Product.find({});
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    if (method === "POST") {
        // Handle POST request to create a new product
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
