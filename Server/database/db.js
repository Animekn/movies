const mongoose = require("mongoose")

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.z6bghxw.mongodb.net/netflix?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Database connected Successfully!!');
  } catch (error) {
    console.log('Error while connecting whith the database', error.message);
 
  } 
} 

module.exports = Connection
