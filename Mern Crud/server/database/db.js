import mongoose from 'mongoose';



const Connection = async () => {
    
    const URL = 'mongodb+srv://baibhav3211:baibhav@mern-job-app.jqofa.mongodb.net/mern-job-app?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false, useCreateIndex:true});
        console.log("Database connection established");
    }catch(err) {
        console.log("Error: ", err.message);
    }
}

export default Connection;
