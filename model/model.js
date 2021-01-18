import { Schema, model } from 'mongoose';

const blogSchema=Schema({
    title:{
        type: String,
        required:true
    },
    author:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    }
},{
    timestamps:true
});

const model = mongoose.model("model", model)

export default model('Blog',blogSchema);