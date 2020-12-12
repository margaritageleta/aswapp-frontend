import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems } from '../../redux/actions/itemActions'

 class Items extends Component {

    componentDidMount(){
        this.props.getItems()
    }

    render() {
        const { items } = this.props.items
        console.log(items)
  
        return (
            <div>
                {items.map(u => 
                    <React.Fragment key={u.id}>
                        <h6 >{u.name}</h6> 
                    </React.Fragment>
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