//models are used to define the structure of the data that will be stored in the database

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema; //find the object id of the user

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        text: true,
    },

    last_name: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        text: true,
    },

    username: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
        text: true,
        unique: true,
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
    },

    gender: {
        type: String,
        required: [true, 'Gender is required'],
        trim: true,
    },

    bDay: {
        type: Number,
        require: true,
        trim: true,
    },

    bMonth: {
        type: Number,
        require: true,
        trim: true,
    },

    bYear: {
        type: Number,
        require: true,
        trim: true,
    },

    picture: {
        type: String,
        default: "https://res.cloudinary.com/dzcmadjl1/image/upload/v1621361006/avatars/avatar-1_gxqjxu.png",
    },

    cover: {
        type: String,
        trim: true,
    },

    verified: {
        type: Boolean,
        default: false,
    },
    
    friends: {
        type: Array,
        default: [],
    },

    following: {
        type: Array,
        default: [],
    },

    followers: {
        type: Array,
        default: [],
    },

    request: {
        type: Array,
        default: [],
    },

    // search for users using the object id  
    search:[
        {
            user: {
                type: ObjectId,
                ref: 'User',
            }
        }
    ],

    details: {
        bio: {
            type: String,
        },
        otherName: {
            type: String,
        },
        job: {
            type: String,
        },
        workplace: {
            type: String,
        },
        highSchool: {
            type: String,
        },
        collage: {
            type: String,
        },
        currentCity: {
            type: String,
        },
        homeTown: {
            type: String,
        },
        relationship: {
            type: String,
            enum: ['Single', 'Married', 'Engaged', 'In a relationship', 'It\'s complicated', 'Divorced', 'Widowed'],
            //enum => only this array value can be used
        },
        instagram: {
            type: String,
        },
    },

    savedPosts: [
        {
            post: {
                type: ObjectId,
                ref:'Post', //post model
            },
            savedAt: {
                type: Date,
                default: new Date(),
            },
        }
    ],

},

    {
        timeStamps:true, //stores the created and updated time in the db
    }
);

module.exports = mongoose.model("User",userSchema);