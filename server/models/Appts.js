const { Schema, model} = require('mongoose');

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

const Appt = model('Appoint', apptSchema);

module.exports = Appt;
