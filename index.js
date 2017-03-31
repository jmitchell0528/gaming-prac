const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;

/////////

passport.use(new facebookStrategy(  {
  clientID: '',
  clientSecret: '',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
},
function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//////////

const app = express();

app.use(bodyParser.json());
app.use(session(  {
  secret: 'keyboard kat',
  saveUnitialized: false,
  resave: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => res.send('Welcome Home'));
app.get('/me', (req, res) => res.json(req.user));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/me',
  failureRedirect: '/'
}))

app.get('/api/facebook/following',
  function(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.status(403).end();
    }
    return next();
  },
  function(req, res) {
    facebook.user.getfollowingFromUser( {
      user: session.user.username
    }, function(err, result) {
      console.log(result)
      res.send(result)
    })
  })

app.listen(3000)
