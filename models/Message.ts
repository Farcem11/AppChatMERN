import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const MessageSchema = new Schema(
{
    UserId : 
    {
        type : ObjectId,
        required : "Add user id"
    },
    Text :
    {
        type : String,
        required : "Add text"
    },
    CreatedDate: 
    {
        type: Date,
        default: Date.now
    }
});

export const Message = mongoose.model('Message', MessageSchema); 