//@ts-nocheck
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");

// mount the router:To use router in ur main express app , u can "mount" it at specificURL prefix

const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const corsOptions={
  origin:"http://localhost:5173",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials:true
}

app.use(cors(corsOptions))

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`port running at port: ${PORT}`);
  });
});
