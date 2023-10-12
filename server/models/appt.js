const { Schema } = require('mongoose');

const apptSchema = new Schema({
  coach: [
    {
      id: Integer,
      type: String,
    },
  ],
  date: {
    type: Integer,
    required: true,
  }
})
module.export = apptSchema