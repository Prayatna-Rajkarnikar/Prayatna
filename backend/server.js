import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import portfolioRoutes from "./routes/portfolioRoutes.js";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("combined"));

app.use("/user", portfolioRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Connected Successfully on PORT ${process.env.PORT}`);
});
