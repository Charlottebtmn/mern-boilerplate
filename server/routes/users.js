const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const config = require('../config');

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'my-images',
  allowedFormats: ['jpg', 'png', 'gif'],
});

const parser = multer({ storage });


// Route to get all users
router.get('/', (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users)
    })
});

//Route to get a specific user
router.get('/profile', passport.authenticate("jwt", config.jwtSession), function (req, res, next) {
    res.json(
      req.user
    );
});

// Route to add a picture on one user with Cloudinary
// To perform the request throw Postman, you need
// - Endpoint: POST http://localhost:3030/api/users/picture
// - Select: Body > form-data
// - Put as key: picture (and select "File")
// - Upload your file
// To perform the request in HTML:
//   <form method="post" enctype="multipart/form-data" action="http://localhost:3030/api/users/picture">
//     <input type="file" name="picture" />
//     <input type="submit" value="Upload" />
//   </form>

router.post('/picture-one-user', parser.single('picture'), (req, res, next) => {
  User.findOneAndUpdate({}, {pictureUrl: req.file.url })
    .then(() => {
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
});

// Route to add a Todo to a specific users
router.post('/todos', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  console.log(req.body);
  let user = req.user;
  User.findByIdAndUpdate(req.user._id, {
    $push: { todos: {
      _celebrity: req.body.celebrityId,
      description : req.body.description,
      }}
    },
    {new: true},
    (err, user) => {
      if (err) {
        next(err);
      } else {
        res.json(user);
      }
    });
});

// Route to update the swipes of a specific user
router.post('/swipes', passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let user = req.user;
  User.findByIdAndUpdate(req.user._id, {
    $push: { swipes: {
      _celebrity: req.body.celebrity,
      isMatched : req.body.isMatched,
      }}
  },
  (err, user) => {
    if (err) {
      next(err);
    } else {
      res.json(user);
    }
  });
});

module.exports = router;
