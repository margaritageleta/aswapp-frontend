import { Grid } from '@material-ui/core';
import React, { Component } from 'react'
import axiosClient from '../../config/axios';
import Note from '../stateless/Note';

 class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: [], 
            message: '',
        };
    }
    
    async componentDidMount(){
        try {
            var response = null;
            if(this.props.fromUser == true) response= await axiosClient.get(`/items/` + this.props.id + '/comments');
            else response= await axiosClient.get(`/items/users` + this.props.id + '/comments');
            console.log(response.data);
            this.setState({comments: response.data})
        }
        catch (err) {
            this.setState({message: 'ERROR por aqui NO PASAS'})
            console.log(err)
        }
    }

    render() {

        return (
            <div>
                <h4>{this.state.message}</h4>
                <Grid container direction={'column'}>
                    {this.state.comments.map(c => 
                        c.parent == null? <Note comments={this.state.comments} comment={c} depth={4}/>
                        : <span></span>
                    )}
              </Grid>

            </div>
        )
    }
}


export default Comments;