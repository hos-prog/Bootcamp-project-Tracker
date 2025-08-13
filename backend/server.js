import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.APP_NAME} running on port ${process.env.PORT}`);
});
