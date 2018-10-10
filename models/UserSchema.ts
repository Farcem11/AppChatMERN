import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    FirstName: {
        type: String,
        required: 'Enter a first name'
    },
    LastName: {
        type: String,
        required: 'Enter a last name'
    },
    Email: {
        type: String            
    },
    Password: {
        type: String            
    },
    Phone: {
        type: Number            
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});