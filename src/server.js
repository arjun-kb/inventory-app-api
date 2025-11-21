
import express from "express";
import productsRoutes from "./routes/productsRoutes.js"
import {connectMongoDB} from "../src/config/config-db.js"

const app = express()


connectMongoDB()
//middleware req-> server-> (middle ware) -> response
app.use(express.json())
app.use("/api/products", productsRoutes)

app.listen(process.env.PORT, () => {
    console.log("server is listening!!");
})