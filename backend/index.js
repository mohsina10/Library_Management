const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
const router = express.Router();
const libAuth = require("./Schema/login");
const bookadd = require("./Schema/book");
app.use(cors());
const uri =
  "mongodb+srv://user2001:test123@cluster0.yrjxwok.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected to MongoDB successfully.");
});

app.use(express.json());
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newItem = new libAuth(req.body);
    await newItem.save();

    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to save item" });
  }
  res.json({ message: "Registration successful", username, email });
  // res.redirect('/signin');
});
app.delete("/api/delete/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const deletedItem = await bookadd.findOneAndDelete(req.params.bookname);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.put("/api/update/:id", async (req, res) => {
  try {
    console.log(req.body);
    const updatedItem = await bookadd.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item updated successfully", updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.get("/api/data", async (req, res) => {
  try {
    const data = await bookadd.find();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/api/bookadd", async (req, res) => {
  const { bookname, author, date, description } = req.body;

  try {
    const newItem = new bookadd(req.body);
    await newItem.save();

    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to save item" });
  }
  res.json({ message: "Registration successful", bookname, author });
  // res.redirect('/signin');
});
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(password);

  try {
    const check = await libAuth.findOne({ email: email });
    const user = await libAuth.findOne({ email });
    console.log(user.password);
    if (check) {
      if (user.password == password) {
        res.json({ username: user.username, status: "exist" });
        console.log(user.username);
      } else {
        res.json("pnotexist");
      }
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
