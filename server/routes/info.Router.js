const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get(`/:id`, (req, res) => {
    // Get an individual farm information from database when the user clicks on a farm card
    const sqlText = `SELECT * FROM "user_info" WHERE "id" = $1;`;
    const queryText = [req.params.id]
    console.log('req.params.id', req.params.id)
    pool.query(sqlText, queryText)
        .then((result) => {
            console.log(`Recieved individual farm from database`, result.rows);
            // Return individual farm data
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
});

module.exports = router;