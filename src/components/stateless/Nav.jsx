import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <AppBar color="primary" position="static" style={{ margin: 0 }}>
                <Toolbar>
                    <TypoGraphy variant="title" color="inherit">
                        <Link to='/'>HackerNews</Link>
                    </TypoGraphy>
                </Toolbar>
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
            </AppBar>
        )
    }
}

export default Nav;