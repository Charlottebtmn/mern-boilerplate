const mongoose = require('mongoose');
const Celebrity = require ('../../models/celebrity.js');
require('../../configs/database.js');

let celebrityData = [
  {
    firstName: "Barack",
    lastName: "Obama",
    occupation: "Former President of the USA",
    pictureUrl: "http://www.bravotv.com/sites/nbcubravotv/files/styles/blog-post--mobile/public/field_blog_image/2017/02/jet-set-obama-vacation.jpg?itok=zvWoPAjQ&timestamp=1485970411",
  },
  {
    firstName: "Beyonce",
    lastName: "Knowles",
    occupation: "Pop Star",
    pictureUrl: "https://fortunedotcom.files.wordpress.com/2016/04/gettyimages-88628374.jpg",
  },
];

Celebrity.create(celebrityData, (err,celeb) => {
  if (err) {
    throw err;
  }
  else {
    celeb.forEach(celeb => {
      console.log(celeb);
    });
  }
  mongoose.connection.close();
});
