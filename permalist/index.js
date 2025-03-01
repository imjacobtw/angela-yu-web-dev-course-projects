import express from "express";
import bodyParser from "body-parser";
import db from "./config/db.js";
import "dotenv/config";

const app = express();
const port = parseInt(process.env.APP_PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items");
    const items = result.rows;
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.error(err);
    res.render("error.ejs", {
      errorMessage: "There was an error reading the list items.",
    });
  }
});

app.post("/add", async (req, res) => {
  const { newItem } = req.body;

  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [newItem]);
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect("/");
  }
});

app.post("/edit", async (req, res) => {
  const { updatedItemId, updatedItemTitle } = req.body;

  try {
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [updatedItemTitle, updatedItemId]);
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect("/");
  }
});

app.post("/delete", async (req, res) => {
  const { deleteItemId } = req.body;

  try {
    await db.query("DELETE FROM items WHERE id = $1", [deleteItemId]);
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect("/");
  }
});

app.listen(port, async () => {
  console.log(`Server running on port ${port}.`);
  await db.connect();
  console.log("Connected to the database.");
});
