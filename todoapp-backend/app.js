const express = require("express");
const tasks = require("./routes/tasks.js");
const crud = require("./database/crudrepository.js");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", tasks);

app.use(express.static("./build"));

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
  crud.connect();
});
