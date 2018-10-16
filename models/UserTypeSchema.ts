import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserTypeSchema = new Schema({
    Name: 
    {
        type: String,
        required: 'Enter the type name'
    }
});