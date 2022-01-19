const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const testSchema = new Schema({
    name: String,
    brand: String
  });

  module.exports= mongoose.model("testSchema",testSchema);