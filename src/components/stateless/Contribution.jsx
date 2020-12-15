import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom';

class Contribution extends Component {

    redirect() {
      this.props.history.push(`/item/${this.props.item.id}`);
    }
    
    redirectUser() {

      this.props.history.push(`/user/${this.props.id}`); //undefined??
    }


    render() {
        const { classes } = this.props;
        console.log('LESS', this.props.less);
        return(
            <Grid item>
            <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
              {(this.props.less != false) 
              ? <CardActionArea onClick={this.redirect.bind(this)}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {this.props.item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              : <CardContent>
                  <Typography variant="h6" component="h2">
                    {this.props.item.title}
                  </Typography>
                  <Typography variant="caption" component="p">
                    {this.props.item.question}
                  </Typography>
                </CardContent>
              }
              <CardActions>
                <Button size="small" color="primary" onClick={console.log('CLICK')}>
                    {this.props.item.number_votes} VOTES
                </Button>
                <Button size="small" color="primary" onClick={this.redirectUser.bind(this)}>
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


