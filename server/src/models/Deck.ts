// 1. Import and install mongoose
import mongoose from 'mongoose';

// 2. Create Schema 
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const DeckSchema = new Schema({
  title: String, 
});

// 3. Access Schema 

const DeckModel = mongoose.model('Deck', DeckSchema);

export default DeckModel;