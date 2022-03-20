const connection = require('../config/connection');
const { User, Thought } = require('../models')
const { users } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async() => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  console.log(users)

  await User.collection.insertMany(users)

  console.log(users)
  console.info('Seedingg complete!')
  process.exit(0);
})