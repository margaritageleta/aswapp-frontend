import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import styles from './mystyle.module.css';
import Moment from 'react-moment';
import { idClient } from '../../config/axios';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

class Profile extends Component {

    redirect() {
        this.props.history.push(`/users/${this.props.id}`);
    }

    constructor(props) {
        super(props);
        this.state = {value: this.props.user.description};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('The description was changed: ' + this.state.value);
        event.preventDefault();
    }

    redirectPost(){

    }

    render() {
        const { classes } = this.props;
        console.log('LESS', this.props.less);
        return(
            <Card style={{ marginTop: 10, marginLeft: 5, marginRight: 5 }}>
                <CardContent>
                <p>
                    <b>user:</b> {this.props.user.username}<br></br>
                    <b>created:</b> <Moment fromNow>{this.props.user.created_at}</Moment><br></br> 
                    <b>karma:</b> {this.props.user.karma}<br></br>
                
                <form onSubmit={this.handleSubmit}> 
                        <b>description:</b>
                        <div>
                            <input type="text" value={this.props.user.description} onChange={this.handleChange} className={styles.desc}/>
                        </div>
                    <div>
                        <input type="submit" value="Update" onClick={this.redirectPost.bind(this)} />
                    </div>
                    
                </form>
                </p>
                <p>
                    <Link to={`/user/${idClient}/contributions`}>submissions</Link><br></br> 
                    <Link to={'/'}>Comments</Link><br></br> 
                    <Link to={'/'}>Upvoted submissions</Link><br></br> 
                    <Link to={'/'}>Upvoted comments</Link><br></br> 
                </p>
                
                </CardContent>
            </Card>

        )
    }
}

export default withRouter(Profile);


