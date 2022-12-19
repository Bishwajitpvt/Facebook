const User = require('../models/User');
const { validateEmail, validateLength } = require('../helpers/validation');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {

    try {
        const {
            first_name,
            last_name,
            username,
            email,
            password,
            gender,
            bDay,
            bMonth,
            bYear } = req.body;

        // check if email is valid or not
        if (!validateEmail(email)) {
            return res.status(400).json(
                { message: 'Invalid email adrress' }
            );
        };
        //console.log(validateEmail(email));

        // check if email already exists
        const check = await User.findOne({ email });
        // if email already exists, return error message
        if (check) {
            return res.status(400).json(
                { message: 'Email adrress already exist, try with diffrent email' }
            );
        }

        // first name validation
        if (!validateLength(first_name, 2, 20)) { 
            return res.status(400).json(
                { message: 'First Name to short' }
            );
        }

        // last name validation
        if (!validateLength(last_name, 2, 20)) { 
            return res.status(400).json(
                { message: 'Last Name to short' }
            );
        }

        //password validation
        if (!validateLength(password, 6, 20)) { 
            return res.status(400).json(
                { message: 'Password to short !! must be atleat 6 character' }
            );
        }

        // encrypt password
        const cryptedPassword = await bcrypt.hash(password, 12); // 12 is salt
        console.log(cryptedPassword);

    return;
        const user = await new User({
            first_name,
            last_name,
            username,
            email,
            password,
            gender,
            bDay,
            bMonth,
            bYear
        }).save();

        res.json(user);

    } catch (err) {
        // show error message
        res.status(400).json({ message: err.message });
    };
};