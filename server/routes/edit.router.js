const express = require('express')
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.put('/:id', rejectUnauthenticated, (req, res) => {
    const edit = req.body
    const query = `UPDATE "edibles_db" SET  "edible" = $1, "description" = $2, "season" = $3,
    "location" = $4, "image" = $5 WHERE "id" = $6;`;

    const values = [
        edit.edible,
        edit.description,
        edit.season,
        edit.location,
        edit.image,
        edit.id
    ]
    pool.query(query,values)
    .then(result=>{
        res.sendStatus(200);
    }).catch(error =>{
        console.log('error',error);
        
    })
});

module.exports = router;