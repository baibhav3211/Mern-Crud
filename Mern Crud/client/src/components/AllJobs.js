import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, makeStyles, Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { deleteJob, getJobs } from '../service/api';
import NotFound from '../assets/NotFound.jpg'

const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        marginTop: 70,
        // justifyContent: 'space-'
    },
    component: {
        padding: 10,
        margin: '8px 10px',
        background: "#ffffff",
    },
    actions: {
        // textAlign:"right"
        display:'flex',
        marginLeft:'auto'
    },
    title: {
        marginRight: 'auto',
        fontSize:16,
        fontWeight:600
    },
    
    edit: {
        margin:5
    }
})


const AllJobs = () => {
    const classes = useStyle();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getAllJobs();
    }, []);

    const getAllJobs = async () => {
        let response = await getJobs();
        setJobs(response.data);
    }

    const deleteJobData = async (id) => {
        await deleteJob(id);
        getAllJobs();
    }

    return (
        <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
            {
                (jobs.length)? (jobs.map(item => (
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                        <Card className={classes.component}>
                            <CardContent>
                                <Typography color="textSecondary">
                                    <Box className={classes.actions}>
                                        <Typography className={classes.title}>{item.title}</Typography>
                                        <Link to={`/edit/${item._id}`}><Button variant="contained" color="primary" className={classes.edit} size="small">Edit</Button></Link>
                                        <Button variant="contained" color="secondary" onClick={() => deleteJobData(item._id)} className={classes.edit} size="small">Delete</Button>
                                    </Box>
                                </Typography>
                                <br></br>
                                <Typography color="textSecondary">
                                    {item.time}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Apply</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))): (<img src={NotFound} style={{width: '30%', margin: '80px 0 0 35%'}} />)
            }
        </Grid>
    )
}

export default AllJobs
