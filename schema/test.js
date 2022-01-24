const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const testSchema = new Schema({
    name: String,
    brand: String,
    smoke: {
      type:String,
      required: true,
      default: "GOLD FLAKE"
    },
    time_stamp:{
      type: Date,
      default: Date.now
    }
  });

  module.exports= mongoose.model("testSchema",testSchema);