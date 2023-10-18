const { Schema, model} = require('mongoose');

// this creates a Schema
const apptSchema = new Schema({
  user: 
    {
      type: Schema.Types.ObjectId, ref:"User"
    },

  date: {
    type: String,
    required: true,
  }
})

const Appt = model('appointments', apptSchema);

module.exports = Appt;
