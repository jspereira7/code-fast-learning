import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, // define que é uma string
        required: true,
        trim: true, //  remove espaços antes e depois do que foi inserido
    },
    email: {
        type: String, 
        trim: true, 
        lowercase: true,
        required: true, 
    },
    image: { 
        type: String, 
    },
    boards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board",
        },
    ]
});

export default mongoose.models.User || mongoose.model("User", userSchema);