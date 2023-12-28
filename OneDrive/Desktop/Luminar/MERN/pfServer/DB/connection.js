const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
   console.log("MongoDB Atlas successfully Connected with pfServer");
}).catch((err)=>{
    console.log(`MongoDB connection failed!! Error: ${err}`);
})