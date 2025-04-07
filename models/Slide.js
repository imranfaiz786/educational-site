import mongoose from 'mongoose';

const slideSchema = new mongoose.Schema({
  title: String,
  description: String,
  filename: String,
  filepath: String,
  uploadedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Slide', slideSchema);