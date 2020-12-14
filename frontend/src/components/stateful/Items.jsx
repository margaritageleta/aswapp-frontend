import React, { Component } from 'react'
import axiosClient from '../../config/axios';
// import { connect } from 'react-redux'
// import { getItems, getAsks, getUrls } from '../../redux/actions/itemActions'
import Contribution from '../stateless/Contribution'
import { Grid, Paper, Typography } from "@material-ui/core";

 class Items extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [], 
            message: '',
        };
    }

    async componentDidMount(){
        if (this.props.userId === '') {
            var endpoint =  '/items/';
            console.log(this.props.type);
            switch (this.props.type) {
                case 'ASK': 
                    endpoint += 'asks';
                    break;
                case 'URL': 
                    endpoint += 'urls';
                    break;
            }
        } else {
            var endpoint = '/users/' + this.props.userId;
            endpoint += this.props.voted ? '/votedItems' : '/items';
        }
        console.log(endpoint);
        try {
            const response = await axiosClient.get(endpoint);
            this.setState({items: response.data})
        }
        catch (err) {
            this.setState({message: 'ERROR por aqui NO PASAS'})
        }
    }

    render() {
  
        return (
            <div>
                <Grid container direction={'column'}>
                    {this.state.items.map(i => 
                        <Contribution item={i}/>
                    )}
                </Grid>
            </div>
        )
    }
}

export default Items