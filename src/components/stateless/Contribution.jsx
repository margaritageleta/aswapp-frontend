import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Moment from 'react-moment';
import { withRouter, Link } from 'react-router-dom';
import Note from './Note';
import axiosClient, { idClient } from '../../config/axios';
import SubmitComment from './SubmitComment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Collapse from '@material-ui/core/Collapse';
import ReplyIcon from '@material-ui/icons/Reply';
import PersonIcon from "@material-ui/icons/Person";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

class Contribution extends Component {
    constructor(props){
      super(props)
      this.state = {color: 'silver', voted: false, expanded: false}
    }

    handleExpandClick = () => {
        if (!this.state.expanded) {
            this.setState({expanded: true})
        } else {
            this.setState({expanded: false})
        }
    }

    redirect() {
      this.props.history.push(`/item/${this.props.item.id}`);
    }
    
    redirectUser() {
      this.props.history.push(`/user/${this.props.item.author}`);
    }

    async componentDidMount(){
      try {
        console.log('CLIENT ID', idClient);
        const response = await axiosClient.get(`/users/${idClient}/votedItems`);
        console.log('VOTES')
        console.log(response.data);
        response.data.map(c => {
            if (c.id == this.props.item.id){
              this.setState({color: 'green', voted: true});
            }
        });
      }
      catch (err) {
          console.log('ERROR por aqui NO PASAS');
      }
    }

    async handleVote(event) {
      event.preventDefault();
      try {
          event.preventDefault();
        
          const response = await axiosClient.post(`/items/${this.props.item.id}/votes/`);
          window.location.reload();
          axiosClient.defaults.headers.post['X-CRFTOKEN'] = 'hbzutSgT2Y2mJ4LWVgHGxf1rJuRH2GliPDKXbdEBvNNJqUWdHthlJnPr2oWjRjR6';

          event.preventDefault();
          if (response.data.status == '202, publication voted') {
            this.setState({color: 'green', voted: true});
          } else {
            this.setState({color: 'silver', voted: false});
          }
          console.log(this.state);

      }
      catch (err) {
          console.log(err)
          console.log('ERROR por aqui NO PASAS');
      }
      //alert('The item has been voted');
      event.preventDefault();

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
                <Typography variant="caption" component="p">
                  &nbsp;  Posted &nbsp; 
                  <b><Moment fromNow>
                      {this.props.item.created_at}
                  </Moment></b>
                  &nbsp;  by
                </Typography>
                <Link to={`/user/${this.props.item.author}`}>
                    <Button size="small" color="primary" startIcon={<PersonIcon /> }>
                        User {this.props.item.author}
                    </Button>
                </Link>
                <Button size="small" color="primary" startIcon={<ReplyIcon />} 
                    onClick={this.handleExpandClick.bind(this)}
                    aria-expanded={false}
                >
                    Reply
                </Button>

                <Button size="small" color="primary" id='btn_vote' onClick={this.handleVote.bind(this)} endIcon={<ThumbUpIcon />} style={{color: this.state.color}}>
                    {this.props.item.number_votes}
                </Button>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <SubmitComment item={this.props.item} parent = ''/>
                </CardContent>
              </Collapse>
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
