const {Client} = require ('pg');

const client = new Client({
    host: "surus.db.elephantsql.com",
    user: "husfvtqh",
    password: "7W8WqXZyfj_Ck9Zy_-9pNOE3k3ho94jc",
    database: "husfvtqh"
})


export default function handler(request, response) {

    client.connect()
 
  }