const db = require("./database");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./src/config/routes.js")(app);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

db();
