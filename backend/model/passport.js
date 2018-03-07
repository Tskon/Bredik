const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({
    _usernameField: 'login',
    _passwordField: 'pass'
  }, (login, pass, done) => {
    User.findOne({username: login}, function (err, user) {
      return err
        ? done(err)
        : user
          ? password === user.password
            ? done(null, user)
            : done(null, false, {message: 'Incorrect password.'})
          : done(null, false, {message: 'Incorrect username.'});
    });
  }
));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  User.findById(id, function(err,user){
    err
      ? done(err)
      : done(null,user);
  });
});