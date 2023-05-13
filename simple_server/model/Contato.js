const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contato = new Schema({
  
  name: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  },
},{
    collection: 'contato'
});

module.exports = mongoose.model('Contato', Contato);