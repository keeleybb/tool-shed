const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  listingName: {
    type: String,
    unique: false,
    required: [true, "text is required"]
  },
  details: {
    type: String,
    unique: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Listing = mongoose.model("listing", listingSchema);

module.exports = Listing;
