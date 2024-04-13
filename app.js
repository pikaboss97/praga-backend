const db = require("./database");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

require("./src/config/routes.js")(app);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

db();
