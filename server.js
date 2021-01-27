const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//setup port
const PORT = process.env.PORT || 3000;

//creating express app
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//require routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

//syncing mongo database
mongoose.connect(process.env.MOGODB_URI || "mongodb://localhost/fitnessDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//turing on app
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}..`);
});