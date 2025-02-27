import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const data = response.data;
    res.render("index.ejs", {
      secret: data.secret,
      user: data.username,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
