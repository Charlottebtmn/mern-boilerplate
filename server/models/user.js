const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {type:String, required: [true, "An e-mail is required"]},
  firstName: String,
  pictureUrl: String,
  todos: [
    {
      _celebrity: { type: Schema.Types.ObjectId, ref: 'Celebrity' },
      description: String,
      done: { type: Boolean, default: false},
    }
  ],
  swipes: [
    {
      _celebrity: String,
      isMatched: Boolean,
    }
  ]

  // hashed: String, // Defined with passportLocalMongoose
  // salt: String, // Defined with passportLocalMongoose

});

// Add "email" (instead of "username"), "hash" and "salt" field to store the email (as username), the hashed password and the salt value
// Documentation: https://github.com/saintedlama/passport-local-mongoose
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model('User', userSchema);
