// 1. Import and install express 
import express, { Request, Response } from "express"; 

// 2a. In order to connect to MongoDB Atlas Database > install and connect mongoose
import mongoose from 'mongoose';
mongoose.set("strictQuery", false);

// 2b. Get access to model: Deck 
import Deck from './models/Deck'; 

// 2d. Create Port Const 
const PORT = 4000; 

// 3a. Create constant to connect to express > API 
const app = express()

// 3b. Create a middleware to get pots from the client 
app.use(express.json()); 

// 4. Create Basic Response and Requests as Test Runs 
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!"); 
})

// app.get("/decks", (req: Request, res: Response) => {
//   res.send("YOYOYOYO")
// })

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title, 
  });
  const createdDeck = await newDeck.save(); 
  res.send(createdDeck);
})

// 5. Create constant to connect to database in MongoDB Atlas
mongoose.connect(
  'mongodb+srv://purthashaariyaar:qDTxPaT2dl7tU7zY@purtha.xvoapfq.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
  console.log(`Listening on port ${PORT}`); 
  app.listen(PORT); 
})


