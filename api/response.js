const mongoose = require('mongoose');


export default function handler(request, response) {

  mongoose.connect("mongodb+srv://kawsar:n0EBot0wdLGh5YBO@atlascluster.xzdzk.mongodb.net/smess?retryWrites=true&w=majority")
.then(() => {
  console.log("Connected to mongodb");
  response.status(200).json({
    msg: "Hello"
  });
})
.catch((err) =>{
  console.log(err);
});
  
}
