var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/table", require("./routes/table"));
app.use("/waiter", require("./routes/waiter"));
app.use("/order", require("./routes/order"));
app.use("/menu", require("./routes/menu"));

module.exports = app;
