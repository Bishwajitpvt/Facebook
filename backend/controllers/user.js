const { validateEmail, validateLength, validateUsername, } = require("../helpers/validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/token");

const { sendVerificationEmail } = require("../helpers/mailer");



exports.register = async (req, res) => {

    try {

        const {
            first_name,
            last_name,
            email,
            password,
            username,
            bYear,
            bMonth,
            bDay,
            gender,
        } = req.body;

        // email validation
        if (!validateEmail(email)) {
            return res.status(400).json({
                message: "invalid email address",
            });
        }

        // check if email already exists
        const check = await User.findOne({ email });
        if (check) {
            return res.status(400).json({
                message:
                    "This email address already exists,try with a different email address",
            });
        }

        // length validation
        // first_name
        if (!validateLength(first_name, 3, 30)) {
            return res.status(400).json({
                message: "first name must between 3 and 30 characters.",
            });
        }

        // last_name
        if (!validateLength(last_name, 3, 30)) {
            return res.status(400).json({
                message: "last name must between 3 and 30 characters.",
            });
        }

        // password
        if (!validateLength(password, 6, 40)) {
            return res.status(400).json({
                message: "password must be atleast 6 characters.",
            });
        }

        // password encryption
        const cryptedPassword = await bcrypt.hash(password, 12); // 12 is the salt

        // username validation
        let tempUsername = first_name + last_name;
        let newUsername = await validateUsername(tempUsername);


        const user = await new User({
            first_name,
            last_name,
            email,
            password: cryptedPassword,
            username: newUsername,
            bYear,
            bMonth,
            bDay,
            gender,
        }).save();

        // generate token for email verification
        const emailVerificationToken = generateToken({ id: user._id.toString() }, "10m");
        console.log(emailVerificationToken);

        // send email verification link
        const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
        sendVerificationEmail(user.email, user.first_name, url);

        //res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
