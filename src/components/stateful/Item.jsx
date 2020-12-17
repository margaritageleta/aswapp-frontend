import React, { Component } from 'react'
import axiosClient from '../../config/axios';
import Contribution from '../stateless/Contribution'
import SubmitComment from '../stateless/SubmitComment';
import { withRouter, Redirect } from 'react-router-dom';

 class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            item: {}, 
            comments: [],
            error: false,
            message: '',
            redirect: false,
        };
    }
    
    async componentDidMount(){
        try {
            const response = await axiosClient.get(`/items/${this.props.id}`);
            this.setState({item: response.data});

            if (!this.props.less) {
                const response = await axiosClient.get(`/items/${this.props.id}/comments`);
                this.setState({comments: response.data});
            }
        }
        catch (err) {
            this.setState({redirect: true})
            if (err.response.status == 404) {
                this.setState({error: true, message: 'No comments'})
            } else {
                console.log(err.response);
            }
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>;
        } else {
            return (
                <div>
                    <h4>{this.state.message}</h4>
                    <Contribution item={this.state.item} less={this.props.less} comments={this.state.comments}/>
                    {(this.state.error)
                    ? <h4 style={{textAlign: 'center'}}>{this.state.message}</h4>
                    : <span></span>
                    }
                </div>
            )
        }
    }
}


export default withRouter(Item);