const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config({ path: "../.env.local" });

//Routes
const indexRoutes = require("./routes/index");
const userRecipeRooutes = require("./routes/userRecipe");
const userRoutes = require("./routes/user");

app.use(express.static(path.join(__dirname, "../build")));

app.use(express.json());

app.use("/index", indexRoutes);
app.use("/userRecipe", userRecipeRooutes);
app.use("/user", userRoutes);

//Other Requests

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
