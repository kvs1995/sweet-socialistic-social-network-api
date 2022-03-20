const users = [
  {
  "username": "recyclops",
  "email": "schrutefarmsinquiries@dundermifflin.com"
  },
  {
  "username": "TheNardDog",
  "email": "cornellfan@dundermifflin.com"
  },
  {
  "username": "Michael_Scarn",
  "email": "numba1boss@dundermifflin.com"
  },
  {
  "username": "jhalpert",
  "email": "jhalpert@dundermifflin.com"
  },
  {
  "username": "iLuvUErin",
  "email": "moregoregabriel@saber.com"
  } 
]


const thoughts = [
  {
    "thoughtText": "I deserve to be the leader of Here Come Treble!!",
    "username": "TheNardDog"
  },
  {
    "thoughtText": "Here Comes Treble is THE best acapella group at Cornell.",
    "username": "TheNardDog"
  },
  {
    "thoughtText": "Trying to think of what prank to pull on Dwight next.",
    "username": "jhalpert"
  },
  {
    "thoughtText": "Erin, please take me back. I love you. ",
    "username": "iLuvErin"
  },
  {
    "thoughtText": "Threat Level Midnight out soon!!",
    "username": "Michael_Scarn"
  },
  {
    "thoughtText": "I love telling people we sell exotic meats here at Schrute Farms",
    "username": "recyclops"
  },
  {
    "thoughtText": "Why does Michael ALWAYS favor Jim over me?? I am the number ONE salesman!!! I deserve Michaels love more than him!!1",
    "username": "recyclops"
  }

]

// // Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// // Gets a random full name
// const getRandomUser = () =>
//   `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;

// //get random thoughts
// const getRandomThought = () =>
//  `${getRandomArrItem(thoughts)} ${getRandomArrItem(thoughts)}`;
module.exports =  { users, thoughts }