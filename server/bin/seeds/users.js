const mongoose = require('mongoose');
const User = require ('../../models/user.js');
require('../../configs/database.js');

let usersData = [
  {
    email: "julie.chane@gmail.com",
    firstName: "Julie",
    pictureUrl: "https://d2ojpxxtu63wzl.cloudfront.net/static/1befd10db74af412748cea4e819081fb_01ace2209d2c6ecc391618cc77d0f5d48e13c9c4da58e708a3ebe64a4dcc153e",
    password: "a"
  },
  {
    email: "charlotte@ironhack.com",
    firstName: "Charlotte",
    pictureUrl: "https://cdn-images-1.medium.com/fit/c/200/200/1*0NjkkbboryozL6fb54KJjg.png",
    password: "a"
  }
];


User.remove( {}, function() {
  for (let i = 0; i < usersData.length; i++) {
    User.register(usersData[i], usersData[i].password, (err,user) => {
      if (err) {
        throw err;
      }
      else {
        console.log(user);
      }
    });
  }
});
