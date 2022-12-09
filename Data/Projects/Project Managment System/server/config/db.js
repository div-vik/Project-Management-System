const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://divyavikash:qwertyuiop@cluster0.dzfxye8.mongodb.net/mgmt_db?retryWrites=true&w=majority');

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;