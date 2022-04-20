const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')



//get all edibles for edible list

router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT * FROM "edibles_db";`

    pool.query(query)
        .then((results) => res.send(results.rows))
        .catch((err) => {
            console.log('Error in edibles GET', err);
        })
});

// add edibles for logged in user(admin) to the DB


router.post('/', rejectUnauthenticated, (req, res) => {

    const query = `INSERT INTO "edibles_db" ("edible", "description", "season", "location", "image", "user_id")
                    VALUES ($1, $2, $3, $4, $5, $6);`;

    const values = [req.body.edible, req.body.description, req.body.season, req.body.location, req.body.image, req.user.id]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log('Error in post', err);
        })
});


// delete edible from the list

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    console.log('edible router DELETE id:', id);

    const query = `DELETE FROM "edibles_db" WHERE id = $1`;
    values = [id];
    pool.query(query, values)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error in edible DELETE', err);
            res.sendStatus(500);
        });
});

//  Update edible if it's something the logged in user(admin) added

router.put('/:id', (req, res) => {
  // endpoint functionality
});
module.exports = router;