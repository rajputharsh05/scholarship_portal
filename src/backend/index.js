const express = require("express");
const collection = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = 8000 ||

app.post("/", async (req, res) => {
  try {
    const user = await collection.findOne({ email: req.body.email });
    if (req.body.password === user.password) {
      console.log("authorized");
      res.json("exist");
    } else {
      console.log("Wrong password");
      res.json("notexist");
    }
  } catch (err) {
    console.log(err);
    console.log("User not registered");
    res.send("notexist");
  }
});
app.post("/register", async (req, res) => {
  try {
    const check = await collection.findOne({ email: req.body.email });
    if (check) {
      res.json("exist");
      // console.log( )
    } else {
      res.json("notexist");
      const user = new collection(req.body);
      await user.save();
      console.log("Registered");
    }
  } catch (e) {
    res.json("notexist");
  }
  // res.redirect(301, "/register");
});

app.listen(PORT, () => {
  console.log("app connected");
});
