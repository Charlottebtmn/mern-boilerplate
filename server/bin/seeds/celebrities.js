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
  {
    firstName: "Maxence",
    lastName: "Bouret",
    occupation: "Webdev Teacher and Chartreuse Drinker",
    pictureUrl: "https://cdn-images-1.medium.com/max/1200/1*4vIkoT2ii8unib8Ezb-Ukw.jpeg",
  },
];

Celebrity.remove( {}, function() {
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
});
