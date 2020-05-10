const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get(`/:id`, (req, res) => {
    // Get user's farm information from database when the user clicks on a farm card
    const sqlText = `SELECT user_info.*, 
	CASE WHEN count(d) = 0 THEN ARRAY[]::json[] ELSE array_agg(d.dropinfo) END AS drops,
	CASE WHEN count(i) = 0 THEN ARRAY[]::json[] ELSE array_agg(i.pictures) END AS pics
FROM user_info 
LEFT OUTER JOIN (  
	SELECT user_id, json_build_object('id', drop_info.id, 'drop_name', drop_info.drop_name, 'drop_location', drop_info.drop_location) 
	as dropinfo
      FROM drop_info ORDER BY drop_info.id
      			) d on d.user_id = user_info.user_id
LEFT OUTER JOIN (  
	SELECT user_id, json_build_object ('id', images.id, 'image_url', images.image_url)
	as pictures
    FROM images ORDER BY images.id
      			) i on i.user_id = user_info.user_id
WHERE user_info.user_id = $1
GROUP BY user_info.id;`;
    const queryText = req.params.id
    console.log(`req.params.id: ${req.params.id}`)
    pool.query(sqlText, [queryText])
        .then((results) => {
            console.log(`User data from database: ${results.rows}`);
            res.send(results.rows[0]);
        })
        .catch((error) => {
            console.log(`Error making user_info query: ${sqlText}`, error);
            res.sendStatus(500); 
        })
    });

module.exports = router;