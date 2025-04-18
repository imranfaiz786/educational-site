import express from 'express';
import multer from 'multer';
import { uploadSlide, getSlides } from '../controllers/slideController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

router.post('/upload', upload.single('file'), uploadSlide);
router.get('/', getSlides);

export default router;