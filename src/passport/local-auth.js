const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pwd',
    passReqToCallback: true
}, (req, email, pwd, done) => {
    
}))