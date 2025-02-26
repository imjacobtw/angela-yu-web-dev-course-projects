import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

function authorizeUser(req, res, next) {
  const { password } = req.body;
  req.isAuthorized = (password === "ILoveProgramming");
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(authorizeUser);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (req.isAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
