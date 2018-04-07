const mongoose = require('mongoose');
const Celebrity = require ('../../models/celebrity.js');
const User = require ('../../models/user.js');
const Conversation = require ('../../models/conversation.js');
require('../../configs/database.js');

let celebrityData = [
  {
    firstName: "Barack",
    lastName: "Obama",
    occupation: "I know some great jokes",
    pictureUrl: "http://www.bravotv.com/sites/nbcubravotv/files/styles/blog-post--mobile/public/field_blog_image/2017/02/jet-set-obama-vacation.jpg?itok=zvWoPAjQ&timestamp=1485970411",
    todos:["Read 'Inferior' by Angela Saini","Listen to 'La Poudre' : http://www.nouvellesecoutes.fr/la-poudre/"],
    conversationSteps: [
      {
        id: '1',
        message: 'Hey, let’s talk!',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Nahh', trigger: '3' },
          { value: 2, label: 'I’m bored', trigger: '3' },
          { value: 3, label: 'Sure!', trigger: '5' },
        ],
      },
      {
        id: '3',
        message: 'Really? i know a great joke',
        trigger: '4',
      },
      {
        id: '4',
        options: [
          { value: 1, label: 'Leave me alone dude', trigger: '31' },
          { value: 2, label: '...mmmkay', trigger: '5' },
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
          { value: 2, label: 'Mine is mango. i LOVE mangoes ', trigger: '7' },
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
          { value: 1, label: 'Okay now i’m bored', trigger: '31' },
          { value: 2, label: 'Stop, you’re making me hungry ', trigger: '13' },
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
          { value: 1, label: 'Yes i can’t wait !!!', trigger: '11' },
          { value: 2, label:'No srsly I`m done with u', trigger: '31'}
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
          { value: 1, label: 'OMG you perv’. i’m out of here', trigger: '13' },
          { value: 2, label: 'tell me more', trigger: '14' },
         ],
      },

      {
        id: '13',
        message: 'Nooo you can’t leave. Just wait for the answer. I promise you’ll be like that: 🤣',
        trigger: '12',
      },
      {
        id: '14',
        options: [
          { value: 1, label: 'mmmmok...', trigger: '15' },
          { value: 2, label: 'STOP', trigger: '32'}
        ],
      },
      {
        id: '15',
        message: 'Welll Beethoven favorite’s fruit is... Ba-na-na-naaaa 🎶... héhéhé... got it ?',
        trigger: '16',
      },
      {
        id: '16',
        options: [
          { value: 1, label: 'You’re such a loser. Next!', trigger: '32' },
          { value: 2, label: '🤔', trigger: '17' },
          { value: 3, label: 'Ahah', trigger: '17' },
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
          { value: 1, label: 'Wait, who’s Michelle ?', trigger: '21' },
          { value: 2, label: 'It’s ok. I laughed a little bit.', trigger: '19' },
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
          { value: 1, label: 'No way!', trigger: '35' },
          { value: 2, label: 'You must be having fun!', trigger: '22' },
        ],
      },

      {
        id: '21',
        message: 'She’s… my roomate. kind of.',
        trigger: '50',
      },

      {
        id: '22',
        message: 'Looaaads of fun. Did i mention that i’m a feminist?',
        trigger: '23',
      },
      {
        id: '23',
        options: [
          { value: 1, label: 'really?!', trigger: '36' },
          { value: 2, label: 'me too!', trigger: '37' },
          { value: 3, label: 'pfff', trigger: '38' },
        ],
      },


      {
        id: '24',
        message: 'It is absolutely men’s responsibility to fight sexism too. And as spouses and partners and boyfriends, we need to work hard and be deliberate about creating truly equal relationships.',
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
          { value: 2, label: 'screw Michelle, let`s go live together in the Bahamas', trigger: '39'}
        ],
      },
      {
        id: '28',
        message: 'I always tell 👧🏽 👩🏽 one thing : it’s important that their dad is a feminist, because now that’s what they expect of all men.',
        trigger: '29',
      },
      {
        id: '29',
        options: [
          { value: 1, label: 'Ok now i’m convinced. I want to learn more about feminism. How can I do?', trigger: '30' },
          { value: 2, label: 'Thanks but I think I already know a lot about feminism. Cheers !', trigger:'41'}
        ],
      },

      {
        id: '30',
        message: 'Oh it’s quite simple.',
        trigger: '44',
      },


      {
        id: '31',
        message: 'No, don`t leave!',
        trigger: '17',
      },

      {
        id: '32',
        message: 'No but really it`s funny :(',
        trigger: '33',
      },

      {
        id: '33',
        message: '...',
        trigger: '34',
      },

      {
        id: '34',
        message: '...',
        trigger: '17',
      },

      {
        id: '35',
        message: 'They are the best people. And living with women only taught me a lot. I`m a feminist !',
        trigger: '23',
      },

      {
        id: '36',
        message: 'Of course !',
        trigger: '24',
      },

      {
        id: '37',
        message: 'Give me five ✋',
        trigger: '24',
      },

      {
        id: '38',
        message: 'No I mean, really',
        trigger: '24',
      },

      {
        id: '39',
        message: 'Haha you`re funny. But really no.',
        trigger: '40',
      },

      {
        id: '40',
        message: 'I will remain a role model to my daughters !',
        trigger: '28',
      },

      {
        id: '41',
        message: 'You sure ?',
        trigger: '42',
      },

      {
        id: '42',
        options: [
          { value: 1, label: 'Yes !', trigger: '41' },
          { value: 2, label: '.. ok give me your tips !', trigger:'43'}
        ]
      },

      {
        id: '43',
        message: 'aaaaaah :)',
        trigger: '31',
      },

      {
        id: '44',
        message: 'I read this amazing book lately. "Inferior", by Angela Saini. You should definitely ready it',
        trigger:'45'
      },

      {
        id: '45',
        options: [
          { value: 1, label: 'Nice ! Adding this to my to-do !', trigger: '46', todoId:'0' },
          { value: 2, label: 'Already read :) sth else ?', trigger:'47'},
          { value: 3, label: 'No time to read. Anything else ?', trigger:'47'}
        ],
      },

      {
        id: '46',
        message: 'Yipee !',
        trigger: '47',
      },

      {
        id: '47',
        message: 'Then you should try and listen to this super cool Podcast : La Poudre !',
        trigger: '48',
      },

      {
        id: '48',
        options: [
          { value: 1, label: 'Thanks Barack ! Adding this to my To-Do as well !', trigger: '49', todoId:'1' },
          { value: 2, label: 'Not interested but thanks :)', trigger:'49'},
        ],
      },

      {
        id: '49',
        message:'You`re welcome :) see ya !',
        end :true,
      },

      {
        id: '50',
        message:'Oh and just so you know, I`m a feminist 💪 ',
        trigger: '23',
      }


    ]
  },
  {
    firstName: "Stella",
    lastName: "Mc Cartney",
    occupation: "Being naked is #1 sustainable option",
    pictureUrl: "http://vegnews.com/web/uploads/asset/10320/file/VegNews.StellaMcCartney.png",
    todos:["Watch the true cost","Switch to vintage clothes","Check out lenouveaustandard.com"],
    conversationSteps: [
      {
        id: '1',
        message: 'Hi there!',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Hello', trigger: '7' }
        ],
      },
      {
        id: '3',
        message: 'Ouh, nice pic! Where do you live?',
        trigger: '4',
      },

      {
        id: '4',
        user: true,
        trigger: '5',
      },

      {
        id: '5',
        message: 'And how is it in {previousValue}?',
        trigger: '6',
      },

      {
        id: '6',
        options: [
          { value: 1, label: 'Yup, it`s cool', trigger: '7' },
          { value: 2, label: 'Mwa... there`s nothing much to do...', trigger: '7' },
        ],
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
          { value: 2, label: 'I think I`ll go shopping', trigger: '23' },
        ],
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
          { value: 2, label: 'I`m not interested in clothes', trigger: '23' },],
      },

      {
        id: '11',
        message: 'Well... I`m hacking fashion. ahah. Also I`m the daughter of Paul Mc Cartney but i owe nothing to my dad, k ?',
        trigger: '12',
      },

      {
        id: '12',
        options: [
          { value: 1, label: 'Haha ok. Tell me more', trigger: '13' },
          { value: 2, label: 'I LOVE YOUR DAD', trigger:'25'}
        ],
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
          { value: 2, label: 'I had no idea about that... !', trigger: '15' },],
      },

      {
        id: '15',
        message: 'Yeah, you should watch The True cost, it`s great documentary about it.',
        trigger: '26',
      },

      {
        id: '16',
        options: [
          { value: 1, label: 'And how do you hack fashion, exactly?', trigger: '17' },
        ],
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
        message: 'It`s no problem! There are so many ways to consume fashion more sustainably. My best advice would be: switch to vintage. It`s cheaper and so much better that fast-fashion.',
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
          { value: 1, label: 'Wow, thanks Stella ! Adding this to my to-do list !', trigger: '22', todoId:1 },
        ],
      },

      {
        id: '22',
        message: 'Also there are cheaper sustainable brands. You should check this out: Le Nouveau standard, the best website EVER to find sustainable brands',
        trigger: '27',
      },

      {
        id: '23',
        message: 'Okay :( U sure ?',
        trigger: '24'
      },

      {
        id: '24',
        options: [
          { value: 1, label: '... ok keep talking to me', trigger: '9' },
          { value: 2, label: 'Yup pretty much', trigger: '23' },
        ],
      },

      {
        id: '25',
        message: 'OMG I shouldn`t have mentionned that. Sure you don`t want to talk about fashion ? I`ve got some seriously interesting things to say, You`ll see',
        trigger: '24'
      },

      {
        id: '26',
        options: [
          { value: 1, label: 'Sound pretty interesting, let me add that to my to-do list !', trigger: '16', todoId:0 },
          { value: 2, label: 'Not interested, but tell me more about fashion !', trigger: '16' },
          { value: 3, label: 'I really don`t care about fashion :/', trigger: '23' },
        ],
      },

      {
        id: '27',
        options: [
          { value: 1, label: 'Awesome. Adding it to my to-do list.', trigger: '28', todoId:2},
        ],
      },

      {
        id: '28',
        message: 'My pleasure, hope I convinced you ;)',
        end: true,
      },
    ]
  },

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
