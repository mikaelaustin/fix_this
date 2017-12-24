/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');
var express = require('express');
var path = require('path');

//you have to pick the database to connect to;
var dbUrl = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
	database: 'animal_app',
	host: 'localhost',
	port: 5432
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);


//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */

var path = require('path');

var router = express.Router();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.get('/api/reptilia', function(req,res) {
	pgClient.query("SELECT * FROM animals WHERE class='Reptilia'", (err, res) => {
		res.json(res.rows);
	})
})

router.get('api/amphibia', (req,res) => {
	pgClient.query("SELECT * FROM animals WHERE class='Amphibia'", (err, res) => {
		res.json(res.rows);
	})
})

router.get('/api/arachnida', function (req,res) {
	pgClient.query('SELECT * FROM animals WHERE class="Arachnida"', function (err, queryRes){
		res.json(res.rows);
		})
	})

module.exports = router;



