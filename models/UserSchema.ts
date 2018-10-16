import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    UserName: 
    {
        type: String,
        required: 'Enter an user name'
    },
    FirstName: 
    {
        type: String,
        required: 'Enter a first name'
    },
    LastName: 
    {
        type: String,
        required: 'Enter a last name'
    },
    Email: 
    {
        type: String,
        required: 'Enter an email'
    },
    Password: 
    {
        type: String,
        required: 'Enter a password'
    },
    Phone: 
    {
        type: Number
    },
    CreatedDate: 
    {
        type: Date,
        default: Date.now
    },
    UserType :
    {
        type : String
    }
});