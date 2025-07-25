import express from 'express';
import cors from 'cors';
import 'dotenv/config' 
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js'
//App config
const app = express();
const PORT = process.env.PORT;
connectDB();
connectCloudinary();

const cors = require('cors');

const allowedOrigins = [
  'https://e-commerce-frontend-xi-jade.vercel.app',
  'https://e-commerce-manvitha.vercel.app', // ✅ Your frontend
];



//Middlewares
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

//API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRoute)
app.get('/', (req, res) => {
    res.send('API is running...');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);});

export default app;
