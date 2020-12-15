import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './NavStyle.css'
import { IconButton, makeStyles } from '@material-ui/core';
import HackerIcon from './favicon.png'

const useStyles =  makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    title: {
        
        color: 'black',
        fontStyle: 'black',
        fontSize: 13.333,
        fontFamily: 'Verdana, Geneva, sans-serif',

    },
    bar: {
        backgroundColor: '#ff6b0f',
        width: '90%',
        marginTop: '7.5px',
        position: 'relative',
        justifyContent: 'center',
        justifySelf: 'center',
        justifyItems: 'center',
     

    },
    menuButton: {
        marginRight: 10,
    },
    imagen: {
        borderBlockColor: 'white' ,
        height: 18, 
        width: 18, 
        borderWidth: 10, 
        borderColor: 'white',
        color: 'white', 
        backgroundColor: 'white' ,
    },
}));

export default function Nav() {
    const classes = useStyles()
        return (
            /*<nav className="Navbar">
                <i></i>
                <h1 className="navbar-logo">HOLA</h1>

            </nav>
            */
           <div>
                <AppBar className={classes.bar}>
                    <Toolbar >
                        <IconButton>
                            <img src={HackerIcon} alt="Logo" style={{ border: '1px solid white' }}></img>
                        </IconButton>
                        <TypoGraphy>
                            <h1 className={classes.title} to='/' >Hacker News</h1>
                        </TypoGraphy>
                    
                        <List component="nav">
                            <ListItem component="div">
                                <ListItemText inset>
                                    <TypoGraphy color="inherit" variant="title">
                                        <Link to='/newest'> Newest</Link>
                                    </TypoGraphy>
                                </ListItemText>

                                <ListItemText inset>
                                    <TypoGraphy color="inherit" variant="title">
                                        <Link to='/ask'>Ask</Link>
                                    </TypoGraphy>
                                </ListItemText>

                                <ListItemText inset>
                                    <TypoGraphy color="inherit" variant="title">
                                        Contact
                                    </TypoGraphy>
                                </ListItemText>
                            </ListItem >

                        </List>
                    </Toolbar>
                   
                </AppBar>
                <div className={classes.offset}></div>
            </div>
        )
}

