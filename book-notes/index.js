import express from "express";
import bodyParser from "body-parser";
import db from "./config/db.js";
import axios from "axios";
import "dotenv/config";

const APP_PORT = process.env.APP_PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const sortQueryParam = req.query.sort;
  let sortSqlQuery;

  if (sortQueryParam == "date") {
    sortSqlQuery = "date_read DESC";
  } else if (sortQueryParam == "rating") {
    sortSqlQuery = "rating DESC";
  } else {
    sortSqlQuery = "title ASC";
  }

  try {
    const result = await db.query(`SELECT * FROM book_note ORDER BY ${sortSqlQuery}`);
    const notes = result.rows;
    return res.render("index", { notes });
  } catch (err) {
    console.error(err);
    return res.render("index", {
      error: "There was an error loading the book notes.",
    });
  }
});

app.get("/add-note", (req, res) => {
  return res.render("add-note");
});

app.post("/add-note", async (req, res) => {
  const { isbn, title, author, rating, review, date_read } = req.body;
  let cover = null;

  try {
    await axios.get(`https://covers.openlibrary.org/b/isbn/${isbn}.json`);
    cover = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
  } catch (err) {
    console.error(err);
  }

  try {
    await db.query(
      "INSERT INTO book_note (isbn, title, author, cover, rating, review, date_read) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [isbn, title, author, cover, rating, review, date_read]
    );
  } catch (err) {
    console.error(err);
  }

  return res.redirect("/");
});

app.get("/note/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const result = await db.query("SELECT * FROM book_note WHERE id = $1", [id]);
    const note = result.rows[0];
    return res.render("note", { note });
  } catch (err) {
    console.error(err);
    return res.redirect("/");
  }
});

app.use("/", (req, res) => {
  return res.render("404");
});

app.listen(APP_PORT, async () => {
  console.log(`Server started on port ${APP_PORT}.`);
  await db.connect();
  console.log("Connected to the database.");
});
