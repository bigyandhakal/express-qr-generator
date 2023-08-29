const express = require("express");
const app = express();

const indexRouter = require('./routes');

app.set("view engine", 'ejs');
app.set("views", "./views");
app.use(express.static("public"))


app.use(express.json());
app.use('/', indexRouter);

app.listen(5555)
console.log("App is running on port 5555")