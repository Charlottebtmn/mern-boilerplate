var express = require('express');
const Conversation = require('../models/conversation');
const passport = require('passport');
const config = require('../config');

var router = express.Router();

// Route to get all conversations
router.get('/', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  Conversation.find({
    _user:req.user._id
  })
    .populate("_celebrity")
    .then(conversations => {
      res.json(conversations);
    })
    .catch(err => next(err))
});

// Route to get a specific conversation
router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  Conversation.findById(id)
    .populate("_celebrity")
    .then( conversation => {
      res.json(
        conversation
      );
    })
    .catch(error => {
      console.error(error);
    });
});

// Route to post a specific conversation
router.post('/', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  Conversation.find({_user:req.user._id,_celebrity:req.body.celebrity})
    .then ( (convs) => {
      console.log(convs);
      if (convs.length === 0) {
        console.log(req.body.celebrity);
        let user = req.user._id;
        let celebrity = req.body.celebrity;
        let conversation = new Conversation ({
          _user: user,
          _celebrity: celebrity,
        })
        conversation.save( (err,conv) => {
          console.log(err)
          res.json(conv)
        })
      }
      else {
        res.json(convs[0]);
      }
    });
});

// Route to save steps inside a conversation

router.post('/:id/history', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  Conversation.findByIdAndUpdate(req.params.id, {
    $set: { history: req.body.history}
    },
    (err, conversation) => {
      if (err) {
        next(err);
      } else {
        res.json(conversation);
      }
    });
});

module.exports = router;
