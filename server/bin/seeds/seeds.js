const mongoose = require('mongoose');
const Celebrity = require ('../../models/celebrity.js');
const User = require ('../../models/user.js');
const Conversation = require ('../../models/conversation.js');
require('../../configs/database.js');

let celebrityData = [
  {
    firstName: "Barack",
    lastName: "Obama",
    occupation: "Former President of the USA",
    pictureUrl: "http://www.bravotv.com/sites/nbcubravotv/files/styles/blog-post--mobile/public/field_blog_image/2017/02/jet-set-obama-vacation.jpg?itok=zvWoPAjQ&timestamp=1485970411",
    todos:[],
    conversationSteps: [
      { id: '1',
        message: 'What number I am thinking?',
        trigger: '2'
      },
      { id: '2',
        options: [
          { value: 1, label: 'Number 1', trigger: '4' },
          { value: 2, label: 'Number 2', trigger: 3 },
          { value: 3, label: 'Number 3', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Awesome! You are a telepath!',
        end: true,
      },
    ]
  },
  {
    firstName: "Beyonce",
    lastName: "Knowles",
    occupation: "Pop Star",
    pictureUrl: "https://fortunedotcom.files.wordpress.com/2016/04/gettyimages-88628374.jpg",

    conversationSteps: [
      { id: '1',
        message: 'What number I am thinking?',
        trigger: "2"
      },
      { id: '2',
        options: [
          { value: 1, label: 'Number 1', trigger: '4' },
          { value: 2, label: 'Number 2', trigger:"3", todoId: 0 },
          { value: 3, label: 'Number 3', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Awesome! You are a telepath!',
        end: true,
      },
    ]
  },
  {
    firstName: "Maxence",
    lastName: "Bouret",
    occupation: "Webdev Teacher and Chartreuse Drinker",
    pictureUrl: "https://cdn-images-1.medium.com/max/1200/1*4vIkoT2ii8unib8Ezb-Ukw.jpeg",
    todos: [
      "Boire de la Chartreuse tous les jours"
    ],
    conversationSteps: [
      { id: '1',
        message: 'What number I am thinking?',
        trigger: "2"
      },
      { id: '2',
        options: [
          { value: 1, label: 'Number 1', trigger: '4' },
          { value: 2, label: 'Number 2', trigger:"3", todoId: 0 },
          { value: 3, label: 'Number 3', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Awesome! You are a telepath!',
        end: true,
      },
    ]
  },
];

let usersData = [
  {
    email: "julie.chane@gmail.com",
    firstName: "Julie",
    pictureUrl: "https://d2ojpxxtu63wzl.cloudfront.net/static/1befd10db74af412748cea4e819081fb_01ace2209d2c6ecc391618cc77d0f5d48e13c9c4da58e708a3ebe64a4dcc153e",
    password: "a",
    description: "YOLO"
  },
  {
    email: "charlotte@ironhack.com",
    firstName: "Charlotte",
    pictureUrl: "https://cdn-images-1.medium.com/fit/c/200/200/1*0NjkkbboryozL6fb54KJjg.png",
    password: "a",
    description: "YOLO"
  }
];

Conversation.remove({}, (err) => {
  console.log("Conversations removed");
});

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
  });
});

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
