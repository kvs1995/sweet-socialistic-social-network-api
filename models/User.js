//require schema and model from mongoose
const { Schema, model } = require('mongoose');
//Schema to create User model
const userSchema = new Schema(
  {
  //username - type: string, required: true, unique: true, trim: true
    username: {
      type: String,
      required:true,
      unique: true,
      trim: true,
    },
 //email - type: string, required: true, unique: true, match: look up regex for emails from Reg Ex homework. 
    email: {
      type:  String,
      required: true,
      unique: true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    },
  //thoughts 
    thoughts: [
    //list of __id values referencing thought model 
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  
  //friends 
    friends: [
    //list of _id values referencing the User model (self-reference)
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { 
    //toJSON 
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey:false,
  }
);


//declare a virtual, friendCount, that retrieves length of the user's friends array field on query 
  //Need to make this a function method that returns the friends length within the user. 
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

//declare User as a model that uses the userSchema defined above. 
const User = model('user', userSchema)
//export User;

module.exports = User;