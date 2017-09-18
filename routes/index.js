var express = require('express');
var router = express.Router();
var auth = require('../auth');

// GET root page
router.get('/', function(request, response) {
  response.render('index', { user: request.user });
});

// GET login page
router.get('/login', function(request, response) {
  response.render('login', { user: request.user });
});

// GET route for when you click on login - passport authenticates through google
router.get('/auth/google',
  auth.passport.authenticate('google', { scope: ['openid email profile'] }));

// If successful auth - redirects to home page, if not - redirects to /login
router.get('/auth/google/callback',
  auth.passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function(request, response) {
    // Authenticated successfully
    response.redirect('/');
  });

// GET logout route - will sign person out of session
router.get('/logout', function(request, response) {
  request.logout();
  response.redirect('/');
});

// Route middleware to ensure user is authenticated.
function ensureAuthenticated(request, response, next) {
  if (request.isAuthenticated()) {
    return next();
  }
  response.redirect('/login');
}

module.exports = router;
