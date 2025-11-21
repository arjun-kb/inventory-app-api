import express from "express";
import productsRoutes from "./routes/productsRoutes.js";
import { connectMongoDB } from "../src/config/config-db.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/products", productsRoutes);

connectMongoDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server is listening!!");
  });
});