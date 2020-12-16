import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
<<<<<<< HEAD
import { Link, withRouter } from 'react-router-dom';
import styles from './mystyle.module.css'
import {  IconButton, makeStyles, withTheme } from '@material-ui/core';
=======
import { Link } from 'react-router-dom';
import './NavStyle.css'
import { IconButton, makeStyles } from '@material-ui/core';
>>>>>>> 41f057f610c27723c757d6036f7eb3b8cbfc1a5d
import HackerIcon from './favicon.png'
import axiosClient from '../../config/axios';


/*const useStyles =  makeStyles((theme) => ({
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
        marginLeft: '5%',
        marginRight: '5%',
        position: 'relative',
        justifyContent: 'center',
        justifySelf: 'center',
        justifyItems: 'center',
        height: '24px',

    },
    menuButton: {
        marginRight: 1,
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
    rightbar: {
        flexGrow: 1,
    }
    <div className={styles.offset}></div>
}));*/

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            user: {}, 
            message: '',
        };
    }

    async componentDidMount(){
        try {
            console.log(this.props.id);
            const response = await axiosClient.get(`/users/${this.props.id}`);
            console.log(response.data);
            this.setState({user: response.data})
            console.log(this.state.user.username);
        }
        catch (err) {
            this.setState({message: 'ERROR por aqui NO PASAS'})
        }
    }

    render(){
        //const classes = useStyles()
        return (
            /*<nav className="Navbar">
                <i></i>
                <h1 className="navbar-logo">HOLA</h1>

            </nav>
            */
           <div>
                <AppBar >
                    <Toolbar className={styles.bar}>
                        <IconButton>
                            <img src={HackerIcon} alt="Logo" style={{ border: '1px solid white' }}></img>
                        </IconButton>
                        <TypoGraphy>
                            <h1 className={styles.title} to='/' >Hacker News</h1>
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
                            
                        <List component="nav">
                            <ListItem component="div">
                                <ListItemText>
                                    <TypoGraphy color="inherit" variant="title">
                                            <Link to='/newest'> Profile</Link>
                                    </TypoGraphy>
                                </ListItemText>
                                {this.state.user.username}<h1></h1>
                                <h4>|</h4>
                                <ListItemText>
                                    <TypoGraphy color="inherit" variant="title">
                                            <Link to='/newest'> logout</Link>
                                    </TypoGraphy>
                                </ListItemText>
                            </ListItem>
                            
                        </List> 
                    </Toolbar>
                   
                </AppBar>
                
            </div>
        )

    }
    
}

export default Nav;