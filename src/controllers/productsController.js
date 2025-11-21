import Product from "../model/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!", error });
  }
};

export const createProduct = async (req,res) => {
    try{
       const {title,brand,category,description,price,stock} = req.body
       console.log("title" ,title);
       
       const newProduct = new Product({title,brand,category,description,price,stock})
       await newProduct.save()
       res.status(201).json({message : "New Product Created Successfully!"})
    } catch (error){
        res.status(500).json({message : "Internal Server Error!",error : error.message})
    }
}

export const updateProduct = (req, res) => {
  res.status(200).send("updated a Products");
};

export const deleteProduct = (req, res) => {
  res.status(200).send("correspond product deleted by id.");
};
