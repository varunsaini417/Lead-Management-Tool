const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser")
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully!!")
});

const leadsdataRouter = require("./routes/leadsdata")
const userRegistrationRouter = require("./routes/userregistration");

app.use('/leadsData', leadsdataRouter)
app.use("/user",userRegistrationRouter)
app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
})


