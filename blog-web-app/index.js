import express from "express";
import bodyParser from "body-parser";
import initialBlogPosts from "./util/initialBlogPosts.js";
import BlogPost from "./models/BlogPost.js";

let blogPosts = initialBlogPosts;
let lastBlogPostIndex = initialBlogPosts.length - 1;
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    blogPosts,
  });
});

app.get("/create", (req, res) => {
  res.render("create-post.ejs", {
    updateMode: false
  });
});

app.post("/create", (req, res) => {
  const { title, author, body } = req.body;
  const newBlogPost = new BlogPost(++lastBlogPostIndex, title, new Date(), author, body);
  blogPosts.push(newBlogPost);
  res.redirect("/");
});

app.get("/read", (req, res) => {
  const { id } = req.query;
  const post = blogPosts.filter((post) => post.id == id)[0];
  res.render("read.ejs", {
    post,
  });
});

app.get("/update", (req, res) => {
  const { id } = req.query;
  const post = blogPosts.filter((post) => post.id == id)[0];
  res.render("create-post.ejs", {
    updateMode: true,
    post: post,
  })
});

app.post("/update", (req, res) => {
  const { title, author, body, id } = req.body;
  const post = blogPosts.filter((post) => post.id == id)[0];
  post.title = title || post.title;
  post.author = author || post.author;
  post.body = body || post.body;
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const { id } = req.body;
  blogPosts = blogPosts.filter((post) => post.id != id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
