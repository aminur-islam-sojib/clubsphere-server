import express from "express";
import cors from "cors";
// import "express-async-errors";

// import userRoutes from "./routes/user.routes.js";
// import clubRoutes from "./routes/club.routes.js";
// import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/users", userRoutes);
// app.use("/api/clubs", clubRoutes);

app.get("/", (req, res) => res.send("ClubSphere Backend is Running 🚀"));

// app.use(errorHandler);

export default app;
