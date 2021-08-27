import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

const job = mongoose.model('jobs',jobSchema);

export default job;