//@ts-nocheck
require("dotenv").config()
const express = require("express");
const app = express();

const router = require("./router/auth-router");

// mount the router:To use router in ur main express app , u can "mount" it at specificURL prefix

const connectDb = require("./utils/db");

app.use(express.json())

app.use("/api/auth", router);


const PORT = 5000;
connectDb().then(()=>{

    app.listen(PORT, () => {
      console.log(`port running at port: ${PORT}`);
    });
})
