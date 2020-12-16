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
import Note from './Note';
import SubmitComment from './SubmitComment';

class Contribution extends Component {

    redirect() {
      this.props.history.push(`/item/${this.props.item.id}`);
    }
    
    redirectUser() {
      this.props.history.push(`/user/${this.props.item.author}`);
    }

    render() {
        const { classes } = this.props;
        return(
            <Grid item>
            <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
              {(this.props.less != false) 
              ? <CardActionArea onClick={this.redirect.bind(this)}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {this.props.item.title} {(this.props.item.kind == 1)
                      ? <span>({this.props.item.url.match('^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)')[0]})</span>
                      : <span></span>
                      }
                    </Typography>
                  </CardContent>
                </CardActionArea>
              : <CardContent>
                  {(this.props.item.kind == 1)
                  ? <a href={this.props.item.url}>
                      <Typography variant="h6" component="h2">
                        {this.props.item.title} ({this.props.item.url.match('^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)')[0]})
                      </Typography>
                    </a>
                  : <Typography variant="h6" component="h2">
                      {this.props.item.title}
                    </Typography>
                  }
                  <Typography variant="caption" component="p">
                    {this.props.item.question}
                  </Typography>
                </CardContent>
              }
              <CardActions>
                <Button size="small" color="primary">
                    {this.props.item.number_votes} VOTES
                </Button>
                <Button size="small" color="primary" onClick={this.redirectUser.bind(this)}>
                    BY USER {this.props.item.author}
                </Button>
                <Button size="small" color="primary" onClick={this.redirect.bind(this)}>
                    <Moment fromNow>
                        {this.props.item.created_at}
                    </Moment>
                </Button>
              </CardActions>
            </Card>
            {(this.props.less == false) 
            ? <Grid container direction={'column'}>
                {this.props.comments.map(c => 
                    c.parent == null? <Note comments={this.props.comments} comment={c} depth={4} item={this.props.item}/>
                    : <span></span>
                )}
              </Grid>
            : <span></span>
            }
          </Grid>
        )
    }
}

export default withRouter(Contribution);
