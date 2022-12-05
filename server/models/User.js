const mongoose = require("mongoose");

const { Schema } = mongoose;
<<<<<<< HEAD
const bcrypt = require("bcrypt");
const Item = require("./Item");
=======
const bcrypt = require('bcrypt');

>>>>>>> 45b7c4bf6a6e652c4b554e41d008254578e6510e

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
<<<<<<< HEAD
    minlength: 5,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
=======
    minlength: 5
  }

>>>>>>> 45b7c4bf6a6e652c4b554e41d008254578e6510e
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
