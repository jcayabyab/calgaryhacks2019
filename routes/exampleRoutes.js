const mongoose = require("mongoose");
const Example = mongoose.model("example");

module.exports = app => {
  app.get("/example", async (req, res) => {
    const examples = await Example.find({});

    res.send(examples);
  });

  app.post("/example/new", (req, res) => {
    new Example({ example: "Example data" }).save();
  });
};
