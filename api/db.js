const Pool = require('pg').Pool;

const pool = new Pool({
    host: "surus.db.elephantsql.com",
    user: "husfvtqh",
    password: "7W8WqXZyfj_Ck9Zy_-9pNOE3k3ho94jc",
    database: "husfvtqh",
    port: 5432
});

module.exports = pool;