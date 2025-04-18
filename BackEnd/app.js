const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// ✅ تأكد إنك جايب الكنترولر بشكل صحيح
const userController = require('./Controllers/userController');
const hotelController = require('./Controllers/hotelController');

// ✅ تأكد إن الاتنين راجعين Router
app.use('/', userController);
app.use('/', hotelController);

// ✅ تأكد إنك موصل MongoDB
mongoose.connect("mongodb://admin:admin123@localhost:27017/hotels?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ Mongo Error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
