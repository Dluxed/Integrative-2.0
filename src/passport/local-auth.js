const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pwd',
    passReqToCallback: true
}, async (req, email, pwd, done) => {
    const user = new User();
    user.email = email;
    user.password = pwd;
    await user.save();
    done(null, user); 
}));