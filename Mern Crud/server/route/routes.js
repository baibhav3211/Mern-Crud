import express from 'express';
import {getJobs, addJobs, getJobById, deleteJob, editJob} from '../controller/job-controller.js'

const router = express.Router();

router.get('/', getJobs);
router.post('/add', addJobs);
router.get('/:id', getJobById);
router.delete('/:id', deleteJob);
router.put('/:id', editJob);

export default router;