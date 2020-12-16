import React, { Component } from 'react'
import axiosClient from '../../config/axios';
import Contribution from '../stateless/Contribution'
import SubmitComment from '../stateless/SubmitComment';

 class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            item: {}, 
            comments: [],
            message: '',
        };
    }
    
    async componentDidMount(){
        try {
            const response = await axiosClient.get(`/items/${this.props.id}`);
            this.setState({item: response.data});

            if (!this.props.less) {
                const response = await axiosClient.get(`/items/${this.props.id}/comments`);
                this.setState({comments: response.data});
                console.log(this.state.comments);
            }
        }
        catch (err) {
            this.setState({message: 'ERROR por aqui NO PASAS'})
        }
    }

    render() {
        console.log('LESS PROP', this.props.less);
        return (

            <div>
                <h4>{this.state.message}</h4>
                <SubmitComment item={this.state.item}/>
                <Contribution item={this.state.item} less={this.props.less} comments={this.state.comments}/>
            </div>
        )
    }
}


export default Item;