const connection = require('../config/connection');
const { User, Thought } = require('../models')
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async() => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  console.log(users)

  await User.collection.insertMany(users)
  // await Thought.collection.insertMany(thoughts)

  console.log(users)
  console.info('Seedingg complete!')
  process.exit(0);
})