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
    firstName: "Sacha",
    lastName: "???",
    occupation: "Pikachu, thunder Attack !",
    pictureUrl: "https://medias.spotern.com/spots/w1280/65622.jpg",
    conversationSteps: [
      {
        id: '1',
        message: 'Oh ! A wild pokemon !',
        trigger: '2',
      },

      {
        id: '2',
        options: [
          { value: 1, label: 'Dude, I`m not a Pokemon', trigger: '3' },
          { value: 2, label: 'Mmm okay you like that kind of games ? ... Pika pika', trigger: '7' },
        ],
      },

      {
        id: '3',
        message: 'PIKACHU, ATTACK',
        trigger: '4',
      },

      {
        id: '4',
        options: [
          { value: 1, label: 'God dammit you are SO weird', trigger: '5' },
          { value: 2, label: 'Okay... ', trigger: '5' },
        ],
      },

      {
        id: '5',
        message: '"Sacha just escaped the fight"',
        trigger: '6',
      },

      {
        id: '6',
        options: [
          { value: 1, label: 'What the actual fuck', end:true },
        ],
      },

      {
        id: '7',
        message: 'OMG I LOVE PIKACHUS',
        trigger: '4',
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

  {
    firstName: "Oprah",
    lastName: "Winfrey",
    occupation: "Future President of the USA",
    pictureUrl: "https://cdn.luxatic.com/wp-content/uploads/2017/11/Oprah-Winfrey.jpg",
    todos:["Make a random present to someone !"],
    conversationSteps: [
      {
        id: '1',
        message: 'HELLOOOOO AMERICAAAAA',
        trigger: '2',
      },

      {
        id: '2',
        message: 'Oops sorry. Occupational Hazard',
        trigger: '3',
      },

      {
        id: '3',
        message: 'Pssst',
        trigger: '4',
      },

      {
        id: '4',
        message: 'You want a car ?',
        trigger: '5',
      },

      {
        id: '5',
        options: [
          { value: 1, label: 'REALLY OMG THANK YOU OPRAH *faints*', trigger: '6' },
          { value: 2, label: 'Hmm, okay ?', trigger: '13' },
          { value: 3, label: 'I don`t accept present from strangers', trigger: '15' },
        ],
      },

      {
        id: '6',
        message: 'Dude wake up !!',
        trigger: '7',
      },

      {
        id: '7',
        options: [
          { value: 1, label: 'Pfffiou sorry ! Not used to people being so generous', trigger: '8' },
        ],
      },

      {
        id: '8',
        message: 'Haha it`s fine. Actually it`s just the way I am ! And you know what ? It makes me reaaaally happy',
        trigger: '9',
      },

      {
        id: '9',
        message: 'Just make a random present to someone you know from time to time. It will make them happy, and you at the same time ;)',
        trigger: '10',
      },

      {
        id: '10',
        options: [
          { value: 1, label: 'Wow you`re right. I will !', trigger: '11', todoId:0 },
          { value: 2, label: 'I don`t have money to do that :(', trigger: '' },
        ],
      },

      {
        id: '11',
        message: 'Doesn`t have to be a car everytime!! Just a small attention will make it ;)',
        trigger: '12',
      },

      {
        id: '12',
        message: 'Shoot I`m late. I`m meeting Barack to talk about *cough* things. Cheers !',
        end:true,
      },

      {
        id: '13',
        message: 'Oh no I gave my last car yesterday :/ just realized ! sorry :/',
        trigger: '14',
      },

      {
        id: '14',
        message: 'Actually I`ve got some advice for you',
        trigger: '9',
      },

      {
        id: '15',
        message: 'Wooh okay sorry for trying to be NICE',
        trigger: '14',
      },

    ]
  },

  {
    firstName: "Hermione",
    lastName: "Granger",
    occupation: "I like red-haired people",
    pictureUrl: "https://cnet3.cbsistatic.com/img/IiSojZnaZ1aXq5qoTYmLR6zu-9s=/570x0/2015/01/26/32532904-b8d8-4f68-99ad-a77766e9d145/emmawatson-harry-potter-and-the-deathly-hallows-pt-1.jpg",
    todos:["Read one book per month"],
    conversationSteps: [
      {
        id: '1',
        message: 'Wingardium Leviosa !',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Aaaaaaah help', trigger: '3' },
        ],
      },

      {
        id: '3',
        message: 'oooh Sorry !! I was just rehearsing my fvourite trick :)',
        trigger: '4',
      },

      {
        id: '4',
        options: [
          { value: 1, label: 'Mine is "Avada Kedavra"', trigger: '5' },
        ],
      },

      {
        id: '5',
        message: '"Hermione lies on the floor. She`s not breathing anymore"',
        trigger: '6'
      },

      {
        id: '6',
        options: [
          { value: 1, label: 'WHAT HAVE I DONE', trigger: '7' },
          { value: 2, label: 'Mouahahaha now I can do the same to Potter', trigger: '13' },
        ],
      },

      {
        id: '7',
        message: '"Hermione wakes up"',
        trigger: '8'
      },

      {
        id: '7',
        message: 'haha you thought I was dead ? You`re even more stupid than my friends.',
        trigger: '8'
      },

      {
        id: '8',
        message: 'You should read more. One book per month, I dare you !',
        trigger: '9'
      },

      {
        id: '9',
        options: [
          { value: 1, label: 'Good advice. Will do !', trigger: '10', todoId:0 },
          { value: 2, label: 'I hate books', trigger: '12' },
        ],
      },

      {
        id: '10',
        message: 'Cool :)',
        trigger: '11'
      },

      {
        id: '11',
        message: 'Anyways I only like red haired people. You`re not my type. I`m outta here !',
        end: true
      },

      {
        id: '12',
        message: 'Pfff you`re really all the same.',
        trigger: '11'
      },

      {
        id: '13',
        options: [
          { value: 1, label: 'You take off your mask and reveal your Voldemort`s face', trigger: '14' },
          { value: 2, label: 'No, kidding... but, hum, Hermione, are you okay ?', trigger: '7' },
        ],
      },

      {
        id: '14',
        options: [
          { value: 1, label: 'Evil Laugh in ParselTongue', trigger: '15' },
        ],
      },

      {
        id: '15',
        options: [
          { value: 1, label: 'Okay I better go before anyone finds her body', trigger: '7' },
          { value: 2, label: 'Damn, maybe it was a mistake. Hermione ?', trigger: '7' },
        ],
      },

    ]
  },

  {
    firstName: "Omar",
    lastName: "Sy",
    occupation: "Don't worry be happy",
    pictureUrl: "https://pbs.twimg.com/profile_images/901205210902745089/uGtqyqg3_400x400.jpg",
    todos:["Smile to one person per day","Sing a song very loudly everyday","Text a friend you haven't seen in a long time !"],
    conversationSteps: [
          {
            id: '1',
            message: 'Hahahaha',
            trigger: '2',
          },

          {
            id: '2',
            options: [
              { value: 1, label: 'Dude what is so funny ?', trigger: '3' },
              { value: 2, label: 'HAHAHAHHA', trigger: '1' },
            ],
          },

          {
            id: '3',
            message: 'Aaaaaah. I don`t know I`m just really happy',
            trigger: '6',
          },

          {
            id: '4',
            message: 'Well I see I have another life-kiffeur here :)',
            trigger: '5',
          },

          {
            id: '5',
            message: 'I know a simple trick to be happier everyday. Wanna know it ?',
            trigger: '7',
          },

          {
            id: '6',
            options: [
              { value: 1, label: 'Me TOO', trigger: '4' },
              { value: 2, label: 'How do you do that ?', trigger: '8' },
              { value: 3, label: 'Man life is tough there is no reason to be that happy', trigger: '9' },
            ],
          },

          {
            id: '7',
            options: [
              { value: 1, label: 'Shoot it', trigger: '8' },
              { value: 2, label: 'You try not to think about you performance in "X-Men" ? 😅 ', trigger: '10' },
            ],
          },

          {
            id: '8',
            message: 'I just smile to one person per day. You should definitely try :)',
            trigger: '11',
          },

          {
            id: '9',
            message: 'You kidding ? I know a very simple way to be happier everyday',
            trigger: '7',
          },

          {
            id: '10',
            message: 'Ahaha. Burn. No but for real I know a very simple way',
            trigger: '8',
          },

          {
            id: '11',
            options: [
              { value: 1, label: 'Nice. I will try', trigger: '12', todoId:0 },
              { value: 2, label: 'I don`t like people', trigger: '14' },
            ],
          },

          {
            id: '12',
            message: 'GREAT',
            trigger: '13',
          },

          {
            id: '13',
            message: 'Wanna know about other tricks then ?',
            trigger: '15',
          },

          {
            id: '14',
            message: 'Hahaha damn you`re a tough one 🤣',
            trigger: '13',
          },

          {
            id: '15',
            options: [
              { value: 1, label: 'Yeah, let`s try', trigger: '23' },
              { value: 2, label: 'Dunno...', trigger: '31' },
            ],
          },

          {
            id: '16',
            message: '2...',
            trigger: '17',
          },

          {
            id: '17',
            message: '3...',
            trigger: '18',
          },

          {
            id: '18',
            options: [
              { value: 1, label: 'OKAY STOP please tell me your new trick', trigger: '30' },
              { value: 2, label: 'Ready to hear that 😆', trigger: '19' },
            ],
          },

          {
            id: '19',
            message: 'Hahaha see ? I made you laugh. This actually takes us to another advice !',
            trigger: '20',
          },

          {
            id: '20',
            message: 'Sing you ass-off at least once per day. Pretty liberating.',
            trigger: '21',
          },

          {
            id: '21',
            options: [
              { value: 1, label: 'haha that`s a good one. I will try :)', trigger: '29', todoId:1 },
              { value: 2, label: 'I don`t know, I`m such a lousy singer. You have sth else ?', trigger: '22' },
            ],
          },

          {
            id: '22',
            message: 'Yup !',
            trigger: '23',
          },

          {
            id: '23',
            message: 'I take this one from my movie "Les Intouchables". Talks about the importance of Friendship to overccome obstacles',
            trigger: '24',
          },

          {
            id: '24',
            message: 'Every week, try to send a text to a friend you hav`nt seen in a long time.',
            trigger: '25',
          },

          {
            id: '25',
            options: [
              { value: 1, label: 'Damn, you`re right. Will do !', trigger: '28', todoId:2 },
              { value: 2, label: 'I don`t have friends', trigger: '26' },
            ],
          },

          {
            id: '26',
            message: 'Jeez !! I will be you friend ! Here is my number : 0756243947. Shoot me a text whenever you want :)',
            trigger: '27',
          },

          {
            id: '27',
            options: [
              { value: 1, label: 'Thanks bro :)'},
            ],
            end: true,
          },

          {
            id: '28',
            message: 'It was nice talking to you my friend !',
            trigger: '27',
          },

          {
            id: '29',
            message: 'Cool ! I have one last advice !',
            trigger: '23',
          },

          {
            id: '30',
            message: '🤣',
            trigger: '23',
          },

          {
            id: '31',
            message: 'Sure about that ? Okay if you keep saying no I`m going to sing very loudly a Britney Spears Song. Ready ?',
            trigger: '32',
          },

          {
            id: '32',
            message: '1...',
            trigger: '16',
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
