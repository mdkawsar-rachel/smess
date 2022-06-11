const mongoose = require('mongoose');


export default function handler(request, response) {

  mongoose.connect("mongodb+srv://kawsar:n0EBot0wdLGh5YBO@atlascluster.xzdzk.mongodb.net/smess?retryWrites=true&w=majority")
.then(() => {
  console.log("Connected to mongodb");

  mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        //module.exports.Collection = names;
        tables = JSON.stringify(names);
    });
})

  response.status(200).json({
    msg: "Hello",
    tables: tables
  });
})
.catch((err) =>{
  console.log(err);
});
  
}
