const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// POST route to DB
router.post('/:id', (req, res) => {

    const sqlText = `INSERT INTO "user_info" ("user_id", "farm_name", "farm_location", "brief_description", "full_description", "share_information", "drop_name", "drop_location", "images" )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`

    pool.query(sqlText, [req.body.userId, req.body.farmName, req.body.farmLocation, req.body.briefDescription, req.body.fullDescription, req.body.shareInformation, req.body.dropName, req.body.dropLocation, req.body.images])
        .then((response) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('DB error:', error);
            res.sendStatus(500);
        })
});

router.get('/user/info', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM user_info ORDER BY farm_name DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;