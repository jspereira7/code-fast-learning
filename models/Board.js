import mongoose from "mongoose";

// esse arquivo serve como modelo, como já diz o nome "models" pra criar as collections do nosso banco de dados

const boardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,  
        ref: "User"
    },

    name: {
        type: String,
        trim: true,
    }
});

export default mongoose.models.Board || mongoose.model("Board", boardSchema)