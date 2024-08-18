const mongoose = require('mongoose');

// Counter Schema and Model for auto-incrementing
const counterSchema = new mongoose.Schema({
  id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const Counter = mongoose.model('Counter', counterSchema);

// Card Schema and Model with auto-incrementing id
const cardSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Middleware to auto-increment id
cardSchema.pre('save', async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { id: 'card_id' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.id = counter.seq;
  }
  next();
});

// Initialize counter if it doesn't exist
const initializeCounter = async () => {
  const existingCounter = await Counter.findOne({ id: 'card_id' });
  if (!existingCounter) {
    const newCounter = new Counter({ id: 'card_id', seq: 0 });
    await newCounter.save();
  }
};

initializeCounter();

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;