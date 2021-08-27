import Jobs from '../models/job.js'

// Get all Jobs
export const getJobs = async (request, response) => {
    // Step -1 // Test API
    // response.send('Learning Pocket');
    try{
        const jobs = await Jobs.find();
        response.status(200).json(jobs);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}
export const addJobs = async (request, response) => {
    try{
        const job = request.body;
        const newJob = new Jobs(job);
        await newJob.save();

        response.status(200).json('Job created successfully');
    } catch(error){
        response.status(404).json({ message: error.message })
    }
}

// Get a Job by id
export const getJobById = async (request, response) => {
    try{
        const job = await Jobs.findById(request.params.id);
        response.status(200).json(job);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// deleting data of job from the database
export const deleteJob = async (request, response) => {
    try{
        await Jobs.deleteOne({_id: request.params.id});
        response.status(201).json("Job deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Save data of edited job in the database
export const editJob = async (request, response) => {
    let job = await Jobs.findById(request.params.id);
    job = request.body;

    const editJob = new Jobs(job);
    try{
        await Jobs.updateOne({_id: request.params.id}, editJob);
        response.status(201).json(editJob);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}