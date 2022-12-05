const mongoose = require("mongoose");
const User = require('./User');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  swapDate: {
    type: Date
    
  }

});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
