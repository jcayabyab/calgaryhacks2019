const mongoose = require("mongoose");
const { Schema } = mongoose;

const exampleSchema = new Schema({
  example: String
});

mongoose.model("example", exampleSchema);
