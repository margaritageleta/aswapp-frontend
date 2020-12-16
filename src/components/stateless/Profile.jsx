import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends Component {

    redirect() {
        this.props.history.push(`/users/${this.props.id}`);
    }

    render() {
        const { classes } = this.props;
        console.log('LESS', this.props.less);
        return(
            <h1>
                {this.props.user.username}<br></br>
                {this.props.user.created_at}<br></br>
                {this.props.user.description}
                {this.props.user.about}<br></br>
                {this.props.user.karma}<br></br>
            </h1>

        )
    }
}

export default withRouter(Profile);


