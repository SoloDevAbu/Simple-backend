const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

mongoose.connect("mongodb+srv://admin:0ighEra5PvSAGn5n@cluster0.gblax.mongodb.net/UserDetails").then(() => {
    console.log("Connected")
}).catch(() => {
    console.log("Connection Failed")
});

app.listen(3000);