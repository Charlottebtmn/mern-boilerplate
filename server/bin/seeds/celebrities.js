const mongoose = require('mongoose');
const Celebrity = require ('../../models/celebrity.js');
require('../../configs/database.js');

let celebrityData = [
  {
    firstName: "Barack",
    lastName: "Obama",
    occupation: "Former President of the USA",
    pictureUrl: "http://www.bravotv.com/sites/nbcubravotv/files/styles/blog-post--mobile/public/field_blog_image/2017/02/jet-set-obama-vacation.jpg?itok=zvWoPAjQ&timestamp=1485970411",
    todos:["Whether you are male or female : fight sexism !","Listen to 'La Poudre' http://www.nouvellesecoutes.fr/la-poudre/"],
    conversationSteps: [
      {
        id: '1',
        message: 'Hey, let’s meet!',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'nahh', trigger: '3' },
          { value: 2, label: 'i’m bored', trigger: '31' },
          { value: 3, label: 'sure!', trigger: '5' },
        ],
      },
      {
        id: '3',
        message: 'really? i know a great joke',
        trigger: '4',
      },
      {
        id: '4',
        options: [
          { value: 1, label: 'leave me alone dude', trigger: '31' },
          { value: 2, label: 'mmmkay', trigger: '5' },
        ],
      },

      {
        id: '5',
        message: 'Okay: What is Beethoven’s favorite fruit?',
        trigger: '6',
      },
      {
        id: '6',
        options: [
          { value: 1, label: 'who cares? ', trigger: '31' },
          { value: 2, label: 'mine is mango. i LOVE mangoes ', trigger: '7' },
          { value: 3, label: 'hum.. tell me?', trigger: '11' },
        ],
      },
      {
        id: '7',
        message: 'Me too ! Funny, i love pizza too 🍕. Do you? ',
        trigger: '8',
      },
      {
        id: '8',
        options: [
          { value: 1, label: 'okay now i’m bored', trigger: '31' },
          { value: 2, label: 'stop, you’re making me hungry ', trigger: '13' },
          { value: 3, label: 'YES!', trigger: '9' },
        ],
      },


      {
        id: '9',
        message: 'Whaou, we have so much in common. So, wanna know the answer?',
        trigger: '10',
      },

      {
        id: '10',
        options: [
          { value: 1, label: 'yes i can’t wait !!!', trigger: '11' },
         ],
      },

      {
        id: '11',
        message: 'okay here’s a clue :',
        trigger: '12',
      },
      {
        id: '12',
        options: [
          { value: 1, label: 'you perv’. i’m out of here', trigger: '13' },
          { value: 2, label: 'tell me more', trigger: '14' },
         ],
      },

      {
        id: '13',
        message: 'Nooo you can’t leave. just wait for the answer. i promise you’ll be like that: 🤣',
        trigger: '12',
      },
      {
        id: '14',
        options: [
          { value: 1, label: 'mmmmok...', trigger: '15' },
        ],
      },
      {
        id: '15',
        message: 'Welll Beethoven favorite’s fruit is... Ba-na-na-naaaa 🎶<br/> héhéhé… <br/> got it ?',
        trigger: '16',
      },
      {
        id: '16',
        options: [
          { value: 1, label: 'you’re such a loser. next!', trigger: '31' },
          { value: 2, label: '🤔', trigger: '17' },
          { value: 3, label: 'ahah', trigger: '17' },
        ],
      },


      {
        id: '17',
        message: 'Sorry, I tend to make bad dad jokes. Michelle does not like them either.',
        trigger: '18',
      },
      {
        id: '18',
        options: [
          { value: 1, label: 'wait, who’s Michelle ?', trigger: '21' },
          { value: 2, label: 'it’s ok. I laughed a little bit.', trigger: '19' },
        ],
      },

      {
        id: '19',
        message: 'Thank you for your support 🙃 <br/> My roomates sometimes get tired with my jokes. Did I tell you I live with three girls ? My wife and our two daughters 😍',
        trigger: '20',
      },
      {
        id: '20',
        options: [
          { value: 1, label: 'no way!', trigger: '22' },
          { value: 2, label: 'you must be having fun!', trigger: '23' },
        ],
      },

      {
        id: '21',
        message: 'She’s… my roomate. kind of.',
        trigger: '22',
      },
      {
        id: '22',
        message: 'Actually, well, I live with three girls. Two of them are my daughters. And Michelle is my wife 😍. Did i mention that i’m a feminist?',
        trigger: '23',
      },
      {
        id: '23',
        options: [
          { value: 1, label: 'really?!', trigger: '24' },
          { value: 2, label: 'me too!', trigger: '24' },
          { value: 3, label: 'pfff', trigger: '24' },
        ],
      },


      {
        id: '24',
        message: 'Sure! It is absolutely men’s responsibility to fight sexism too. And as spouses and partners and boyfriends, we need to work hard and be deliberate about creating truly equal relationships.',
        trigger: '25',
      },
      {
        id: '25',
        options: [
          { value: 1, label: 'wait.. what?!', trigger: '28' },
          { value: 2, label: 'Marry me', trigger: '26' },
          { value: 3, label: 'You’re too good to be true', trigger: '28' },
        ],
      },


      {
        id: '26',
        message: 'Sorry i’m taken... I would love to meet you though, I’m sure you would get along great with my daughters.',
        trigger: '27',
      },
      {
        id: '27',
        options: [
          { value: 1, label: 'wow. you’re like the best. dad. ever.', trigger: '28' },
        ],
      },
      {
        id: '28',
        message: 'I’m serious! As I often say to my daughters 👧🏽 👩🏽 : it’s important that their dad is a feminist, because now that’s what they expect of all men.',
        trigger: '29',
      },
      {
        id: '29',
        options: [
          { value: 1, label: 'Ok now i’m convinced. I want to learn more about feminism. How can I do?', trigger: '30' },
        ],
      },
      {
        id: '30',
        message: 'Oh it’s quite simple. for instance you could listen to a great podcast: La poudre.',
        trigger: '',
      },
      {
        id: '31',
        message: 'No, don`t leave!',
        trigger: '17',
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
