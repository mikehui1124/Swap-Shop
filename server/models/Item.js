<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const mongoose = require('mongoose');
const User = require('./User');
>>>>>>> 45b7c4bf6a6e652c4b554e41d008254578e6510e

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
<<<<<<< HEAD
  quantity: {
    type: Number,
    min: 0,
    default: 1,
=======
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
>>>>>>> 45b7c4bf6a6e652c4b554e41d008254578e6510e
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  swapDate: {
<<<<<<< HEAD
    type: Date,
    default: Date.now,
  },
=======
    type: Date
    
  }

>>>>>>> 45b7c4bf6a6e652c4b554e41d008254578e6510e
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
