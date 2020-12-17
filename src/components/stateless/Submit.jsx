import { now } from 'moment';
import React, { Component } from 'react'
import axiosClient, { idClient } from '../../config/axios';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

 class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: idClient,
            created_at: "2020-12-02T17:03:38.994910Z",
            number_votes: 1,
            title: '',
            question: '',
            url: '',
            kind: '0', 

        };
        this.handleTitle = this.handleTitle.bind(this);    
        this.handleUrl = this.handleUrl.bind(this);    
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleTitle(event) {
        this.setState({title: event.target.value});
    }

    handleUrl(event) {
        this.setState({url: event.target.value});
        this.setState({kind: '1'})
    }
    handleText(event) {
        this.setState({question: event.target.value});
    }
    
    async handleSubmit(event) {

        console.log("________")
        console.log(this.state.kind);
        console.log("________")
        event.preventDefault();
        try {
            event.preventDefault();
            console.log(this.state);
              
            
            const response = await axiosClient.post('/items/', this.state);
            window.location.reload();
            axiosClient.defaults.headers.post['X-CRFTOKEN'] = 'EK1R4B9zEEG8p9DIBoPcUjunRHrFnk1xgwPMGMnB6F4uA8TgrcKL9vGEeM3Nsp5n';

            console.log(response)
            event.preventDefault();


        }
        catch (err) {
            console.log(err.response)
            console.log('ERROR por aqui NO PASAS');
        }
        event.preventDefault();

    }

    render() {
        return (
            <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 , backgroundColor: "#ffedbc"}}>
                <CardContent>
            <form onSubmit={this.handleSubmit}>
            <label>
                Title:
                <input type="text" value={this.state.value} onChange={this.handleTitle} /><br></br>
                Url: &nbsp;&nbsp;
                <input type="text" value={this.state.value} onChange={this.handleUrl} /><br></br>
                Text: 
                <input type="text" value={this.state.value} onChange={this.handleText} /><br></br>
            </label>
            <input type="submit" value="Submit" />
            </form>
            </CardContent>
            </Card> 
        );
    }
}

export default Submit;