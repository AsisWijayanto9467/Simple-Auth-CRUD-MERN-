const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("../backend/router/AuthRoutes"));
app.use("/api/barang", require("../backend/router/barangRoutes"));

app.listen(5000, () => console.log("API running on port 5000"));