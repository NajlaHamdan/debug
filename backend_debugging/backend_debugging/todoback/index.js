
const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");
const cors=require("cors");
const morgan=require("morgan")
const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
