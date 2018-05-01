var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Diary = new Schema({
  id: {
    type: String
  },
  password: {
    type: String
  },
  topic: {
    type: String
  },
  story: {
    type: String
  },
  date: {
    type: String
  }
},{
    collection: 'diarys'
});

module.exports = mongoose.model('Diary', Diary);

//set all