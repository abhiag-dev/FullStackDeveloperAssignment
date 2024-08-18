const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Replace with your actual Atlas MongoDB URI
const mongoUri = 'mongodb+srv://abhishekag64064:5tsVLezUqWYEZCCd@cluster0.sezwk.mongodb.net/sample';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB Atlas');

  // Sample card creation
//   const sampleCards = [
//     {
//       title: 'Manage Your Account',
//       description: 'Guides and tutorials to help you manage your account effectively.',
//     },
//     {
//       title: 'Branches',
//       description: 'Learn how to manage, version, and document your branches efficiently.',
//     },
//     {
//       title: 'Manage Billing',
//       description: 'Instructions on how to handle your billing and payment methods.',
//     },
//     {
//       title: 'Security Settings',
//       description: 'Steps to ensure your account and data remain secure.',
//     },
//     {
//       title: 'User Management',
//       description: 'Guide to adding, removing, and managing users within your organization.',
//     }
//   ];

//   try {
//     const savedCards = await Card.insertMany(sampleCards);
//     console.log('Sample Cards Created:', savedCards);
//   } catch (err) {
//     console.error('Error creating sample cards:', err);
//   }

 

}).catch((err) => {
  console.error('Failed to connect to MongoDB Atlas', err);
});

// Card Schema and Model, specify collection as "books"
const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { versionKey: false,collection: 'books' });

const Card = mongoose.model('Card', cardSchema);

// Endpoint to check if the server is running
app.get('/ping', (req, res) => {
  res.status(200).send('Server is running!');
});

// Create a new card
app.post('/cards', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCard = new Card({
      title,
      description,
    });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create card' });
  }
});

// Get all cards
app.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve cards' });
  }
});

// Get a specific card by title
app.get('/cards/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve card' });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
