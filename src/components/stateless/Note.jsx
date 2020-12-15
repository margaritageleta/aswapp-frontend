import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom';
import PersonIcon from "@material-ui/icons/Person";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ReplyIcon from '@material-ui/icons/Reply';
import axiosClient, { idClient } from '../../config/axios';


class Note extends Component {

    async deleteComment() {
        try {
            const response = await axiosClient.delete(`/items/comments/${this.props.comment.id}`);
            window.location.reload();
        }
        catch (err) {
            this.setState({message: 'ERROR por aqui NO PASAS'})
        }
    }

    render() {
        console.log(idClient);
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
                <Button size="small" color="primary" startIcon={<PersonIcon />}>
                    User {this.props.comment.author}
                </Button>
                <Button size="small" color="primary" startIcon={<ReplyIcon />}>
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
            </Card>
            {this.props.comments.map(c => 
                c.parent == this.props.comment.id 
                ? <Note comments={this.props.comments} comment={c} depth={this.props.depth * 2}/>
                : <span></span>
            )}
            </Grid>
        );
    }
}

export default withRouter(Note);