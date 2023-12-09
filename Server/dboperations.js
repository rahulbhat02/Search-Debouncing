var  config = require('./dbconfig');
const  mysql = require('mysql');

async  function  getTitle(title) {
    return new Promise((resolve, reject) => {
        try {
            let  pool = mysql.createPool(config);
            pool.getConnection((err, connection) => {
                if(err) throw err
                connection.query(`SELECT movie_id, title FROM movies where title like '${title}%' order by revenue, vote_average limit 5`, (err, rows) => {
                    connection.release() // return the connection to pool
    
                    if (!err) {
                        resolve(rows);
                    } else {
                        resolve(err);
                        console.log(err)
                    }
                })
            })
            
        }
        catch (error) {
          console.log(error);
          resolve(error);
        }
    })
}

module.exports = {
    getTitle:  getTitle
}