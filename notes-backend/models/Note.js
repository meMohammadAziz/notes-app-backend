import pkg from 'mongoose';
const {Schema, model} = pkg;


const NoteSchema = new Schema({
    title : {
        type: String,
        required : true
    },
    details:  {
        type: String,
        required : true
    },
    category:  {
        type: String,
        required : true
    },
      id:  {
        type: Number,
        required : true
    }
})

const Note = model('note', NoteSchema);

export default Note;