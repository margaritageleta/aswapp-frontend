import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { Grid, Typography } from "@material-ui/core";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Moment from 'react-moment';
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


