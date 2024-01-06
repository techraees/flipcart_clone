import express from "express";
import env from "dotenv";
const app = express();
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import DB from "./utils/db.js";

//routes
import authRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin/auth.js";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import initialDataRoutes from "./routes/admin/initialData.js";
import pageRoutes from "./routes/admin/page.js";
import addressRoutes from "./routes/address.js";
import orderRoutes from "./routes/order.js";
import adminOrderRoute from "./routes/admin/order.routes.js";

//environment variable or you can say constants
env.config();

DB();

app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "uploads")));

app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialDataRoutes);
app.use("/api", pageRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
