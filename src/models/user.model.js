import { boolean } from "joi";
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema ({
    username: String,
    email: String,
    password: String,
    isAdmin: {
        type: boolean,
        dafault: false,
    },
});


const User = mongoose.model("User", userSchema);

export default User;