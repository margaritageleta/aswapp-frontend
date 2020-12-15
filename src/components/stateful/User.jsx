import React, { Component } from 'react'
import axiosClient from '../../config/axios';
import Profile from '../stateless/Profile';
import Contribution from '../stateless/Contribution';

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
            console.log(this.props.id);
            const response = await axiosClient.get(`/users/${this.props.id}`);
            console.log(response.data);
            this.setState({user: response.data})
        }
        catch (err) {
            this.setState({message: 'ERROR por aqui NO PASAS'})
        }
    }

    render() {
  
        return (
            <div>
                <Profile user={this.state.user}/>
            </div>
        )
    }
}


export default User;