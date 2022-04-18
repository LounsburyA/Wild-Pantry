const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')





router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT * FROM "edibles_db";`

    pool.query(query)
        .then((results) => res.send(results.rows))
        .catch((err) => {
            console.log('Error in edibles GET', err);
        })
});
router.post('/', rejectUnauthenticated, (req, res) => {

    const query = `INSERT INTO "edibles_db" ("edible", "description", "season", "location", "image")
                    VALUES ($1, $2, $3, $4, $5);`;

    const values = [req.body.edible, req.body.description, req.body.season, req.body.location, req.body.image]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log('Error in post', err);
        })
});
module.exports = router;