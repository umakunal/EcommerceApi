const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/x-store')

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
})
