import Slide from '../models/Slide.js';

export const uploadSlide = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newSlide = new Slide({
      title,
      description,
      filename: req.file.filename,
      filepath: req.file.path,
    });
    await newSlide.save();
    res.status(201).json(newSlide);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSlides = async (req, res) => {
  try {
    const slides = await Slide.find().sort({ uploadedAt: -1 });
    res.json(slides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};