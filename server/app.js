const express = require("express");
const app = express()
const cors = require("cors")
const postInfo = require("./models/post_model")
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({extended: false}))
app.use(cors())
require("dotenv").config()

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`server is running at ${port}`)
})
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Rahul-bunny:Rahulbunny_7@mydata-base.bv9wn.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{console.log("Successfully connected")} ).catch((err) => console.log(err))

app.get("/", (req, res) => {
  postInfo.find({}).then((userData) => {
    console.log(userData)
    res.status(200).send(userData)
  })
});

app.post("/", (req, res) => {
  console.log(req.body)
  postInfo.create(req.body).then(() => {
    res.status(200).redirect("/")
  })
})