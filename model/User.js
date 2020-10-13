const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  rideIds: {
    type: Array,
  },
  currentRideId: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  accountType: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: false
  },
  lng: {
    type: Number,
    required: false
  },
},{
  timestamps:true
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
