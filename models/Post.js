const { model, Schema } = require('mongoose')

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  commons: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectID,
    ref: 'users',
  },
})
module.exports = model('Post', postSchema)