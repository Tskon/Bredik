const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;





// passport.use(new LocalStrategy({
//     _usernameField: 'login',
//     _passwordField: 'pass'
//   }, (login, pass, done) => {
//     User.findOne({username: login}, function (err, user) {
//       return err
//         ? done(err)
//         : user
//           ? password === user.password
//             ? done(null, user)
//             : done(null, false, {message: 'Incorrect password.'})
//           : done(null, false, {message: 'Incorrect username.'});
//     });
//   }
// ));
//
//
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
//
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err,user){
//     err
//       ? done(err)
//       : done(null,user);
//   });
// });
//
// module.exports.login = function(req, res, next) {
//   passport.authenticate('local',
//     function(err, user, info) {
//       return err
//         ? next(err)
//         : user
//           ? req.logIn(user, function(err) {
//             return err
//               ? next(err)
//               : res.redirect('/private');
//           })
//           : res.redirect('/');
//     }
//   )(req, res, next);
// };
//
//
// module.exports.logout = function(req, res) {
//   req.logout();
//   res.redirect('/');
// };
//
// // Регистрация пользователя. Создаем его в базе данных, и тут же, после сохранения, вызываем метод `req.logIn`, авторизуя пользователя
// module.exports.register = function(req, res, next) {
//   var user = new User({ username: req.body.email, password: req.body.password});
//   user.save(function(err) {
//     return err
//       ? next(err)
//       : req.logIn(user, function(err) {
//         return err
//           ? next(err)
//           : res.redirect('/private');
//       });
//   });
// };
//
// // middleware проверка аутентификации
// module.exports.mustAuthenticatedMw = function (req, res, next){
//   req.isAuthenticated()
//     ? next()
//     : res.redirect('/');
// };
