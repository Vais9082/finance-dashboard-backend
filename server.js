const express = require("express");
const app = express();

// VERY IMPORTANT (fixes POST body issue)
app.use(express.json());

// connect routes
const routes = require("./routes");
app.use("/api/transactions", routes);

// test route
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});