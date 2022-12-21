const User = require("../models/User");

// email validation
exports.validateEmail = (email) => {
    return String(email).toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};


// length validation for username, first_name, last_name, password
exports.validateLength = (text, min, max) => {
    if (text.length > max || text.length < min) {
        return false;
    }
    return true;
};
 

// username validation
exports.validateUsername = async (username) => {
    let a = false;

    do {
        let check = await User.findOne({ username });
        if (check) {
            //change username
            username += (+new Date() * Math.random()).toString().substring(0, 1);
            a = true;
        } else {
            a = false;
        }
    } while (a);
    return username;
};

