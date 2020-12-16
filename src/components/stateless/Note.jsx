import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Moment from 'react-moment';
import { withRouter, Link } from 'react-router-dom';
import PersonIcon from "@material-ui/icons/Person";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ReplyIcon from '@material-ui/icons/Reply';
import axiosClient, { idClient } from '../../config/axios';
import Collapse from '@material-ui/core/Collapse';
import SubmitComment from './SubmitComment';

class Note extends Component {
    constructor(props){
        super(props)
        this.state = {expanded: false}
    }

    handleExpandClick = () => {
        if (!this.state.expanded) {
            this.setState({expanded: true})
        } else {
            this.setState({expanded: false})
        }
    }

    async deleteComment() {
        try {
            const response = await axiosClient.delete(`/items/comments/${this.props.comment.id}`);
            window.location.reload();
        }
        catch (err) {
            this.setState({message: 'ERROR por aqui NO PASAS'});
        }
    }

    redirectUser() {
        console.log(`/user/${this.props.comment.author}`);
        this.props.history.push(`/user/${this.props.comment.author}`);
    }

    render() {
        console.log(idClient);
        console.log('Render');
        return (
            <Grid item>
            <Card style={{ marginTop: 10, marginLeft: 5 * this.props.depth, marginRight: 5, backgroundColor: "#ffedbc"}}>
               <CardContent>
                    <Typography variant="caption" component="p">
                    {this.props.comment.comment}
                    </Typography>
                </CardContent>
              <CardActions>
                <Typography variant="caption" component="p">
                &nbsp;  Posted &nbsp; 
                    <b><Moment fromNow>
                        {this.props.comment.created_at}
                    </Moment></b>
                    &nbsp;  by
                </Typography>
                <Link to={`/user/${this.props.comment.author}`}>
                    <Button size="small" color="primary" startIcon={<PersonIcon /> }>
                        User {this.props.comment.author}
                    </Button>
                </Link>
                <Button size="small" color="primary" startIcon={<ReplyIcon />} 
                    onClick={this.handleExpandClick.bind(this)}
                    aria-expanded={false}
                >
                    Reply
                </Button>
                { this.props.comment.author == idClient
                ?<Button size="small" color="primary" 
                    startIcon={<DeleteForeverIcon />}
                    onClick={this.deleteComment.bind(this)}
                >
                    Delete
                </Button>
                : <span></span>
                }
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <SubmitComment item={this.props.item} parent={this.props.comment} />
                </CardContent>
            </Collapse>
            </Card>
            {this.props.comments.map(c => 
                c.parent == this.props.comment.id 
                ? <Note comments={this.props.comments} comment={c} depth={this.props.depth * 2} item={this.props.item}/>
                : <span></span>
            )}
            </Grid>
        );
    }
}

export default withRouter(Note);