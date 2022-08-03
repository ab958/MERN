const uri = "mongodb+srv://wahab:Ahhad123@cluster0.gnqnx.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose');

let connect = mongoose
  .connect(uri)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

  module.exports = connect