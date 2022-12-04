const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  quantity: {
    type: Number,
    min: 0,
    default: 1
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  swapDate: {
    type: Date,
    default: Date.now
  }

});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
