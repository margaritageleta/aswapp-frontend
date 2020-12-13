import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems } from '../../redux/actions/itemActions'
import Contribution from '../stateless/Contribution'

 class Items extends Component {

    componentDidMount(){
        this.props.getItems()
    }

    render() {
        const { items } = this.props.items
        console.log(items)
  
        return (
            <div>
                {items.map(i => 
                    <Contribution item={i}/>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps, {getItems})(Items)