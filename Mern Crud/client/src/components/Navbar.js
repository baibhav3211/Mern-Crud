import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 16,
        textDecoration: 'none',
        fontSize: 16,
        background: "orange 50%",
        borderRadius: '10px',
        padding: "2px 20px"
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact>LearningPocket</NavLink>
                <NavLink className={classes.tabs} to="all" exact>All Jobs</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add Job</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;