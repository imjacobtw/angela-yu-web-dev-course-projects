import axios from "axios";
import express from "express";
import 'dotenv/config';

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index");
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});