//require connect and connection via mongoose
const { connect, connection } = require('mongoose')

//create the connectionString (socialsDB)
const connectionString = 
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialsDB';

//connect the string 
connect(connectionString, {
  useNewUrlParser:true,
  useUnifiedTopology: true,
});

//export
module.exports = connection;