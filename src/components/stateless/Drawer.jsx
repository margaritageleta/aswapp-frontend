import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import LinkIcon from '@material-ui/icons/Link';
import ForumIcon from '@material-ui/icons/Forum';
import ChatIcon from '@material-ui/icons/Chat';
import PublishIcon from '@material-ui/icons/Publish';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import { withRouter,  Link } from 'react-router-dom';

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

class DrawerComponent extends React.Component {
  state = {
    left: false
  };

  render() {
    const { classes } = this.props;

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.props.toggleDrawerHandler}
        onKeyDown={this.props.toggleDrawerHandler}
      >
        <List>
          {["All", "News", "Threads", "Ask", "Submit"].map((text, index) => {
            switch(index) {
              case 0:
                return (
                  <Link to={'/'}>
                  <ListItem button key={text}>
                      <ListItemIcon><RssFeedIcon />&nbsp; 
                      <ListItemText primary={text} /> </ListItemIcon>
                  </ListItem>
                  </Link>
                );
                case 1:
                  return (
                    <Link to={'/newest'}>
                    <ListItem button key={text}>
                      <ListItemIcon><LinkIcon />&nbsp; 
                      <ListItemText primary={text} />
                      </ListItemIcon>
                    </ListItem>
                    </Link>
                  );
                case 2:
                  return (
                    <Link to={'/ask'}>
                    <ListItem button key={text}>
                      <ListItemIcon><ForumIcon />&nbsp; 
                      <ListItemText primary={text} /></ListItemIcon>
                    </ListItem>
                    </Link>
                  );
                case 3:
                  return (
                    <Link to={'/ask'}>
                    <ListItem button key={text}>
                      <ListItemIcon><ChatIcon />&nbsp; 
                      <ListItemText primary={text} />
                      </ListItemIcon>
                    </ListItem>
                    </Link>
                  );
                case 4:
                  return (
                    <Link to={'/submit'}>
                    <ListItem button key={text}>
                      <ListItemIcon><PublishIcon />&nbsp; 
                      <ListItemText primary={text} />
                      </ListItemIcon>
                    </ListItem>
                    </Link>
                  );
            }
          })}
        </List>
      </div>
    );

    return (
      <Drawer open={this.props.left} onClose={this.props.toggleDrawerHandler}>
        {sideList("left")}
      </Drawer>
    );
  }
}

export default withRouter(withStyles(styles)(DrawerComponent));
