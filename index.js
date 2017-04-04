const express = require('express');
const session = require('express-session');
const {json} = require('body-parser');
const cors = require('cors');
const massive = require ('massive');

const connectionString = 'postgres://postgres:Prince11j9@localhost/gamelogs';

const massiveConnection = massive.connectSync(  {
  connectionString: connectionString
})

const app = express();
const port = 3000;

app.set('db', massiveConnection)
const db = app.get('db');

app.use(express.static(__dirname + '/public'))
app.use(json());
app.use(cors());
app.use(session(  {secret: 'keyboard kat'}  ));

app.get('/api/gamelogs/:id', function(req, res) {
  db.read_gamelog(req.params.id, function(err, gamelog) {
    if (err) return res.status(500).json(err)
    return res.status(200).json(gamelog)
  })
})

app.get('/api/gamelogs', function(req, res) {
  db.read_gamelogs(function(err, gamelogs) {
    if (err) return res.status(500).json(err)
    return res.status(200).json(gamelogs)
  })
})

app.post('/api/gamelogs', function(req, res) {

  db.create_gamelog([req.body.username, req.body.character, req.body.level, req.body.time, req.body.points], function(err, createGamelog) {
    console.log(createGamelog);
    if (err) {return res.status(500).json(err)}
    return res.status(200).json(createGamelog)
  })
})

// app.put('/', function(req, res) {
//   db.update_gamelog([req.body.user, req.body.character, req.body.level, req.body.time, req.body.points], function(err, updateGamelog) {
//     if (err) return res.status(500).json(err)
//     return res.status(200).json(updateGamelog)
//   })
// })

app.delete('/api/gamelogs/:id', function(req, res) {
  db.delete_gamelog(req.params.id, function(err, deleteGamelog) {
    if (err) return res.status(500).json(err)
    return res.status(200).json(deleteGamelog)
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
