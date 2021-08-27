import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addJob } from '../service/api';
import { useHistory } from 'react-router-dom';

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

const AddUser = () => {
    const [job, setJob] = useState(initialValue);
    const { title, description, time} = job;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setJob({...job, [e.target.name]: e.target.value})
    }

    const addJobDetails = async() => {
        await addJob(job);
        console.log("Job added");
        history.push('/all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Job</Typography>
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
                <Button onClick={()=> addJobDetails()} variant="contained" color="primary" >Add Job</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;