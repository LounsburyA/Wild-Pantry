const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


// Where "user_id" = $1;


router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT * FROM "user_finds" WHERE "user_id" = $1;`

    pool.query(query,[req.user.id])
        .then((results) => res.send(results.rows))
        .catch((err) => {
            console.log('Error in journal GET', err);
        })
});


router.get('/:id', rejectUnauthenticated, (req, res) => {
    
    const query = `SELECT * FROM "user_finds" WHERE "id" =$1;`

    pool.query(query,[req.params.id])
        .then((results) => res.send(results.rows))
        .catch((err) => {
            console.log('Error in journal GET', err);
        })
});




router.post('/', rejectUnauthenticated, (req, res) => {

    const query = `INSERT INTO "user_finds" ("item_name", "description", "season", "location", "image", "user_id")
                    VALUES ($1, $2, $3, $4, $5, $6);`;

    const values = [req.body.edible, req.body.description, req.body.season, req.body.location, req.body.image, req.user.id]
    pool.query(query, values)
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log('Error in journal post', err);
        })
});


router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id;
    console.log('user router DELETE id:', id);

    const query = `DELETE FROM "user_finds" WHERE id = $1`;
    values = [id];
    pool.query(query, values)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error in user DELETE', err);
            res.sendStatus(500);
        });
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    const edit = req.body
    const query = `UPDATE "user_finds" SET  "item_name" = $1, "description" = $2, "season" = $3,
    "location" = $4, "image" = $5 WHERE "id" = $6;`;

    const values = [ edit.item_name, edit.description, edit.season, edit.location, edit.image, req.params.id]
    pool.query(query,values)
    .then(result=>{
        res.sendStatus(200);
    }).catch(error =>{
        console.log('error',error);
        
    })
});

module.exports = router;



