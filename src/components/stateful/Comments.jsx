import React, { Component } from 'react'
import axiosClient from '../../config/axios';

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
            const response = await axiosClient.get(`/items/${this.props.id}/comments`);
            console.log(response.data);
            this.setState({item: response.data})
        }
        catch (err) {
            this.setState({message: 'ERROR por aqui NO PASAS'})
        }
    }

    render() {

        return (
            <div>
                <h4>{this.state.message}</h4>
                <h2>Hi comments!</h2>
            </div>
        )
    }
}


export default Comments;