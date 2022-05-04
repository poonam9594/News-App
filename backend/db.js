const mongoose= require('mongoose');
const mongoURI='mongodb://localhost:27017/SampleDB';

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports=connectToMongo;




