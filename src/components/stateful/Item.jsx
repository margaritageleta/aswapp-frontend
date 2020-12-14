import React, { Component } from 'react'
import axiosClient from '../../config/axios';
import Contribution from '../stateless/Contribution'

 class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            item: {}, 
            message: '',
        };
    }
    
    async componentDidMount(){
        try {
            const response = await axiosClient.get(`/items/` + this.props.id);
            this.setState({item: response.data})
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
                <Contribution item={this.state.item} less={this.props.less}/>
            </div>
        )
    }
}


export default Item;