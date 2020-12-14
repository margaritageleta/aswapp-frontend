import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        minWidth: 275,
        backgroundColor: 'aliceblue',
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      avatar: {
        backgroundColor: 'red',
      },
  });

class Contribution extends Component {

    redirect() {
        this.props.history.push(`/item/${this.props.item.id}`);
    }

    render() {
        const { classes } = this.props;

        return(
            <Grid item key={this.props.item.title}>
            <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
              <CardActionArea onClick={this.redirect.bind(this)}>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {this.props.item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={console.log('CLICK')}>
                    {this.props.item.number_votes} VOTES
                </Button>
                <Button size="small" color="primary" onClick={this.redirect.bind(this)}>
                    USER {this.props.item.author}
                </Button>
                <Button size="small" color="primary">
                    <Moment fromNow>
                        {this.props.item.created_at}
                    </Moment>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
    }
}

export default withRouter(Contribution);


