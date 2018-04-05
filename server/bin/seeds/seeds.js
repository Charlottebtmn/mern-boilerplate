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
        message: 'okay here’s a clue : 🍌',
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
        message: 'Thank you for your support 🙃 My roomates sometimes get tired with my jokes. Did I tell you I live with three girls ? My wife and our two daughters 😍',
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
    firstName: "Stella",
    lastName: "Mc Cartney",
    occupation: "Fashion Designer",
    pictureUrl: "http://retailinasia.com/wp-content/uploads/2018/02/Stella-McCartney-Kering-divorce-1-770x515.jpg",
    todos:["Watch the true cost","Switch to vintage clothes","Check out LNS"],
    conversationSteps: [
      {
        id: '1',
        message: 'Hi there!',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Hello', trigger: '2' },
          { value: 2, label: 'Ouh, nice pic! Where do you live?', trigger: '3' },
          { value: 3, label: '(...)', trigger: '5' },
        ],
      },
      {
        id: '3',
        message: 'Ouh, nice pic! Where do you live?',
        trigger: '3',
      },

      {
      id: '4',
      user: true,
      trigger: '5',
      },
      {
      id: '5',
      message: 'And how is it in {previousValue}?',
      end: true,
    },

    {
        id: '6',
        options: [
          { value: 1, label: 'Yup, it`s cool', trigger: '7' },
          { value: 2, label: 'Mwa... there`s nothing much to do...', trigger: '7' },],
      },

      {
        id: '7',
        message: 'So, wassup?',
        trigger: '8',
      },
      {
        id: '8',
        options: [
          { value: 1, label: 'not much. You?', trigger: '9' },
          { value: 2, label: 'I think I`ll go shopping', trigger: '' },],
      },

      {
        id: '9',
        message: 'Well, I`m launching a new brand! For men!',
        trigger: '10',
      },
      {
        id: '10',
        options: [
          { value: 1, label: 'You work in fashion?', trigger: '11' },
          { value: 2, label: 'I`m not interested in clothes', trigger: '' },],
      },

      {
        id: '11',
        message: 'Well... I`m hacking fashion. ahah.',
        trigger: '12',
      },
      {
        id: '12',
        options: [
          { value: 1, label: 'Tell me more', trigger: '13' },],
      },
      {
        id: '13',
        message: 'Actually I don`t like fashion. It pollutes. It pays unfairly. I believe no human should suffer for fashion, and neither should the planet.',
        trigger: '14',
      },
      {
        id: '14',
        options: [
          { value: 1, label: 'I know all that. I agree!', trigger: '15' },
          { value: 2, label: 'I`m so shocked', trigger: '15' },],
      },

      {
        id: '15',
        message: 'Yeah, you should watch The True cost, it`s a great documentary about it.',
        trigger: '16',
      },
      {
        id: '16',
        options: [
          { value: 1, label: 'And how do you hack fashion, exactly?', trigger: '17' },],
      },
      {
        id: '17',
        message: 'We make desirable, beautiful modern products ... I approach the business in a way that I feel is morally correct and modern. It doesn’t mean that style and luxury need to be sacrificed.',
        trigger: '18',
      },
      {
        id: '18',
        options: [
          { value: 1, label: 'That`s nice! but i can`t afford it :(', trigger: '19' },],
      },
      {
        id: '19',
        message: 'It`s no problem! My best advice would be: switch to vintage. It`s cheaper and so much better that fast-fashion.',
        trigger: '20',
      },
      {
        id: '20',
        message: 'For instance you could: - go to thrift stores - exange clothes with your friends - borrow your mom`s and dad`s clothes ;)',
        trigger: '21',
      },
      {
        id: '21',
        options: [
          { value: 1, label: 'Wow, thanks Stella !', trigger: '22' },],
      },
      {
        id: '22',
        message: 'Oh and I forgot: you should check this out: Le Nouveau standard, the best website EVER to find sustainable brands',
        options: [
          { value: 1, label: 'will do', todoId:'2' },
          { value: 2, label: 'i don`t care' },
        ],
      },

  ]},
  {
    firstName: "Gandhi",
    lastName: "Mohandas Karamchand",
    occupation: "Saviour of the World",
    pictureUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201610/mi-647-x-404_100115061838.jpg",
    conversationSteps: [
          {
            id: '1',
            message: 'Yo',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'heu... hello?', trigger: '3' },
              { value: 2, label: 'wassup', trigger: '3' },
            ],
          },

          {
            id: '3',
            message: 'It`s not a good time for me, sorry',
            trigger: '4',
          },
          {
            id: '4',
            options: [
              { value: 1, label: 'OK, so when can we talk?', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'Hum.. try 70 years ago? ahah got you',
            trigger: '',
          },
        ]
  },

  {
    firstName: "Johnny",
    lastName: "Hallyday",
    occupation: "Que je t'aime",
    pictureUrl: "https://www.connexionfrance.com/var/connexion/storage/images/media/images/johnny2/577654-1-eng-GB/johnny_articleimage.jpg",
    conversationSteps: [
      {
        id: '1',
        message: 'Sorry, can`t talk',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'too bad', trigger: '3' },
          { value: 2, label: 'why not?', trigger: '3' },
        ],
      },

{
        id: '3',
        message: 'My family is pissing me off. They`ve all gone crazy. Just because I`m dead',
        trigger: '4',
      },
{
        id: '4',
        options: [
          { value: 1, label: 'seems complicated...', trigger: '5' },
        ],
      },
{
        id: '5',
        message: 'It`s not. I`m gonna start a fire. That will do it. See ya!',
        options: [
          { value: 1, label: 'too bad', trigger: '3' },
          { value: 2, label: 'why not?', trigger: '3' },
        ],
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
}),

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
}),

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
