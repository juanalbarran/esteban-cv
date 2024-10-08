import express from "express";
import { engine } from "express-handlebars";
import path from "path";

const port = 3000;
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.get("/", (req, res) => {
  const data = { name: "Esteban" };
  res.render("index", data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
