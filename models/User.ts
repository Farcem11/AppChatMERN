import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const requiredMessage = 'Is missing';

const UserSchema = new Schema(
{
    UserName: 
    {
        type: String,
        required: requiredMessage
    },
    FirstName: 
    {
        type: String,
        required: requiredMessage
    },
    LastName: 
    {
        type: String,
        required: requiredMessage
    },
    Email: 
    {
        type: String,
        required: requiredMessage
    },
    Password: 
    {
        type: String,
        required: requiredMessage
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

export const User = mongoose.model('User', UserSchema);