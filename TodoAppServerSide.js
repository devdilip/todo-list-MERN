const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/TodosDB", { useNewUrlParser: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use(express.static("dist"));
app.use(express.static("src"));

app.use("/api",require("./routes/TodosApi"));

app.get('*', function(req, res){
  res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port, () => console.log(`Listening on port ${port}`));
