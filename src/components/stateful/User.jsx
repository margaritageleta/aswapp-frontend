import React, { Component } from 'react'
import axiosClient from '../../config/axios';

 class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {}, 
            message: '',
        };
    }
    
    async componentDidMount(){
        try {
            const response = await axiosClient.get(`/users/` + '3');
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
                <h2>Hi User</h2>
            </div>
        )
    }
}


export default User;