//require schema and model from mongoose

//Schema to create User model

  //username - type: string, required: true, unique: true, trim: true

 //email - type: string, required: true, unique: true, match: look up regex for emails from Reg Ex homework. 

  //thoughts 
  
   //list of __id values referencing thought model 
  
  //friends 

    //list of _id values referencing the User model (self-reference)


  //toJSON


//declare a virtual, friendCount, that retrieves length of the user's friends array field on query 
  //Need to make this a function method that returns the friends length within the user. 

//declare User as a model that uses the userSchema defined above. 

//export User;