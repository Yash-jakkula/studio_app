const AccountModal = require('./Model/Account');
const fs = require('fs');
const accounts = require('./data/accounts.json');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load env vars
dotenv.config({ path: './config/.env' });
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
  };
  connectDB();

const data = JSON.parse(fs.readFileSync(`${__dirname}/data/accounts.json`));


const dataImport = async() => {

    await AccountModal.create(data);
    console.log('data inserted');
    process.exit()
}

const deleteData = async() => {
    await AccountModal.deleteMany();
    console.log('data delted');
    process.exit();
}
if(process.argv[2] === '-i'){
    dataImport();
}
if(process.argv[2] == '-d'){
     deleteData();
}

