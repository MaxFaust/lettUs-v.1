const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// POST user information to DB
router.put('/', (req, res) => {
    //User information
    const sqlText1 = `
                    UPDATE "user_info" 
                    SET "farm_name" = $1, "farm_location" = $2, "brief_description" = $3, "full_description" = $4, "share_information" = $5
                    WHERE "user_id" = $6;`
    const queryText = [req.body.farm_name, req.body.farm_location, req.body.brief_description, req.body.full_description, req.body.share_information, req.body.userId];
    console.log('userId is:', req.body.userId)
    pool.query(sqlText1, queryText)
        .then((results) => {
            //POST drop-off name and location with unique user id
            console.log('user_info query results', results.rows);
            const sqlText2 = `
                            UPDATE "drop_info" 
                            SET "drop_name" = $1, "drop_location" = $2
                            WHERE "user_id" = $3;`
            const queryText2 = [req.body.drop_name, req.body.drop_location, req.body.userId];
            pool.query(sqlText2, queryText2)
                .then((results) => {
                    res.sendStatus(200);
                    // query 2 results
                    console.log('drop_info query result', results.rows);
                    const sqlText3 = `
                                    UPDATE "images" 
                                    SET "image_url" = $1
                                    WHERE "user_id" = $2;`
                    const queryText3 = [req.body.images, req.body.userId];
                    
                    pool.query(sqlText3, queryText3)
                        .then(()=> {
                            res.sendStatus(200);
                        })
                        .catch((error) => {
                            console.log('images query error:', error);
                            res.sendStatus(500);
                        }); // error query 3
                        
                }).catch((error) => {
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
    const sqlText = `SELECT * FROM user_info ORDER BY farm_name DESC;`;
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