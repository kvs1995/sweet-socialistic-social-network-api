//require schema nad model from mongoose

//require the reactions schema from Reaction.js

//schema to create thought model

  //thoughtText - type: string, required: true, min_length:1, max_length:280

  //createdAt - type: date, default: Date.now(), getter method to format the timestamp on query

  //username - type: string, required: true

  //reactions = reactionSchema

//declare a virtual, reactionCount that retrieves the length of the thought's reactions array field on the query
  //need to make a function method that returns the length wof the thought's reactions 

// declare Thoughts as a model that uses the thoughtSchema defined above.

//export Thought