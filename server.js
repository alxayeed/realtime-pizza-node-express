const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 3200;

//Static assets
app.use(express.static("public"));

app.get("/", (req, resp) => {
  resp.render("home");
});

//setting up template engine to render html files
app.use(expressLayout);
app.set("views", path.join(__dirname, "resources/views/"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`I am Listening to port ${PORT}`);
});
