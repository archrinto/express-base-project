import mongoose, { Document, Schema } from "mongoose";
import { generateId } from "../utils/string.util";

export enum UserRole {
    ADMIN = 'admin',
}

export interface IUser extends Document {
    id?: string,
    name: string,
    username: string
    email: String
    password: string
    role: string
}

const userSchema: Schema = new Schema({
    _id: {
        type: String,
        default: generateId
    },
    name: String,
    email: String,
    username: String,
    password: String,
    role: String
})

userSchema.set('toJSON', {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password
    },
})

const User = mongoose.model<IUser>('User', userSchema);

export default User; 