import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import noteRoutes from './routes/note.route.js';
dotenv.config();
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/notes/v1/api', noteRoutes);

try {
  mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
  next();
});
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal server error' });
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
