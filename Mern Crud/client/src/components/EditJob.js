import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getJobs, editJob } from '../service/api';


const initialValue = {
    title: '',
    description: '',
    time: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditJob = () => {
    const [job, setJob] = useState(initialValue);
    const { title, description, time} = job;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadJobDetails();
    }, []);

    const loadJobDetails = async() => {
        const response = await getJobs(id);
        setJob(response.data);
    }

    const editJobDetails = async() => {
        const response = await editJob(id, job);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setJob({...job, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Time</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='time' value={time} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editJobDetails()}>Edit Job</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditJob;