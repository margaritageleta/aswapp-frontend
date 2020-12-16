import { now } from 'moment';
import React, { Component } from 'react'
import axiosClient, { idClient } from '../../config/axios';


 class SubmitComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: idClient,
            comment: '',
            created_at: "2020-12-02T17:03:38.994910Z",
            referenced_publication: props.item.id,
            parent: null
        };
        this.handleReply = this.handleReply.bind(this);    
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleReply(event) {
        this.setState({comment: event.target.value});
    }   
    
    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.item.id)
        try {
            event.preventDefault();
            console.log(this.state);
              
            
            const response = await axiosClient.post(`/items/${this.props.item.id}/comments/`, this.state);
            window.location.reload();
            axiosClient.defaults.headers.post['X-CRFTOKEN'] = 'EK1R4B9zEEG8p9DIBoPcUjunRHrFnk1xgwPMGMnB6F4uA8TgrcKL9vGEeM3Nsp5n';

            console.log(response)
            event.preventDefault();


        }
        catch (err) {
            console.log(err)
            console.log('ERROR por aqui NO PASAS');
        }
        alert('A name was submitted: ' + this.state.comment);
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Reply:
                <input type="text" value={this.state.value} onChange={this.handleReply} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SubmitComment;