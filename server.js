const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

mongoose.connect(process.env.MOGODB_URI || "", {
    useNewUrlParser: true
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}..`);
});