const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
