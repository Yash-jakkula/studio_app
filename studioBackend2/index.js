const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/DB');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const monitorUserAmountChanges = require('./streams/userAmountStream');
const twilio = require('twilio');


dotenv.config({path:'./config/.env'});
connectDB()
  .then(() => {
    console.log('Database connected successfully');
    
    // Start monitoring user amount changes
    monitorUserAmountChanges();
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

app.use(cors());
app.use(express.json());

app.use('/api/v2/photographers/users',userRouter);
app.use('/api/v2/photographers/admin',adminRouter);

app.listen(5000,console.log('server started on port 5000'));
