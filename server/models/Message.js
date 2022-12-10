const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  itemRequest: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
  },
  itemOffer: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
  },
  sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  receiver: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  isAgree: {
    type: Boolean,
    default: false,
  },
  isClosed: {
    type: Boolean,
    default: false,
  },

  replyMessage: 
    {
      type: String     
    }  
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
