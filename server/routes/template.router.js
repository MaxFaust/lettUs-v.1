const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// POST user information to DB
router.post('/', (req, res) => {
    //User information
    const sqlText1 = `INSERT INTO "user_info" ("user_id", "farm_name", "farm_location", "brief_description", "full_description", "share_information")
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING "id";`
    const queryText = [req.body.userId, req.body.farm_name, req.body.farm_location, req.body.brief_description, req.body.full_description, req.body.share_information];
    console.log('userId is:', req.body.userId)
    pool.query(sqlText1, queryText)
        .then((results) => {
            //POST drop-off name and location with unique user id
            console.log('user_info query results', results.rows);

            let newUserId = results.rows[0].id;
            const sqlText2 =   `INSERT INTO "drop_info" ("user_id", "drop_name", "drop_location")
                                VALUES ($1, $2, $3)
                                RETURNING "user_id"`
            const queryText2 = [newUserId, req.body.dropName, req.body.dropLocation];
            
            pool.query(sqlText2, queryText2)
                .then((result) => {
                    // query 2 results
                    console.log('drop_info query result', result.rows);
                    
                    let newUserId = result.rows[0].id;
                    const sqlText3 = `INSERT INTO "images" ("user_id", "image_url")
                                        VALUES ($1, $2)`;
                    const queryText3 = [newUserId, req.body.images];
                    
                    pool.query(sqlText3, queryText3)
                        .then(()=> {
                            res.sendStatus(200);
                        })
                        .catch((error) => {
                            console.log('images query error:', error);
                            res.sendStatus(500);
                        }); // error query 3
                        
                })
                .catch((error) => {
                    console.log('drop_info query error:', error);
                    res.sendStatus(500);
                }); // end query 2

        }).catch((error) => {
            console.log('user_info query error:', error);
            res.sendStatus(500); 
        }) // end query 1

}); // end ROUTE

router.get('/all', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM user_info ORDER BY farm_name ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Recieved from database:`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
});

// router.delete('/', (req, res) => {
//     let reqId = req.params.id;
//     console.log('Delete request for id', reqId);
//     let sqlText = 'DELETE FROM "drop_info" WHERE id=$1;';
//     pool.query(sqlText, [reqId])
//       .then( (result) => {
//         console.log('drop location deleted');
//         res.sendStatus(200);
//       })
//       .catch( (error) => {
//         console.log(`Error making database query ${sqlText}`, error);
//         res.sendStatus(500); // Good server always responds
//       })
//   })
module.exports = router;