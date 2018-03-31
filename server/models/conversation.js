const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const User = require('./user');
const Celebrity = require('./celebrity');

const conversationSchema = new mongoose.Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  _celebrity: {
    type: Schema.Types.ObjectId,
    ref: 'Celebrity',
  },

  history: String
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
