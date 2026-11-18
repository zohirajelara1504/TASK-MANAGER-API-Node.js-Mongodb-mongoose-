const express = require("express");
const app = express();
const routes = require("./router/task");
require("dotenv").config();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/err");
// console.log(process.env.MONGO_URI);

// middleware (json parser)

app.use(express.json());

// routes
app.get("/login", (req, res) => {
  res.send("Working");
});
app.use("/api/v1/tasks", routes);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
