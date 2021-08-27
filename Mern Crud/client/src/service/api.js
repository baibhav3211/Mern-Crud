import axios from 'axios';

const Url = 'http://localhost:5000/jobs';

export const addJob = async (job) => {
    return await axios.post(`${Url}/add`, job);
}

export const getJobs = async (id) => {
    id = id || '';
    return await axios.get(`${Url}/${id}`);
}

export const deleteJob = async (id) => {
    return await axios.delete(`${Url}/${id}`);
}

export const editJob = async (id, job) => {
    return await axios.put(`${Url}/${id}`, job)
}