import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import styles from './mystyle.module.css';
import Moment from 'react-moment';
import { idClient } from '../../config/axios';

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
            // <h1>
            //     {this.props.user.username}<br></br>
            //     {this.props.user.created_at}<br></br>
            //     {this.props.user.description}
            //     {this.props.user.about}<br></br>
            //     {this.props.user.karma}<br></br>
            // </h1>
            <div className={styles.text}>
                <h1>
                    user: {this.props.user.username}<br></br>
                    created: <Moment fromNow>{this.props.user.created_at}</Moment><br></br> 
                    karma: {this.props.user.karma}<br></br>
                    about:{this.props.user.about}<br></br>
                </h1>
                <form onSubmit={this.handleSubmit} className={styles.text}> 
                    <label>
                        <h1>description:</h1>
                        <div>
                            <input type="text" value={this.props.user.description} onChange={this.handleChange} className={styles.desc}/>
                        </div>
                          
                    </label>
                    <div>
                        <input type="submit" value="Update" onClick={this.redirectPost.bind(this)} />
                    </div>
                    
                </form>
                <h1>
                    <Link to={`/user/${idClient}/contributions`}>submissions</Link><br></br> 
                    <Link to={'/'}>Comments</Link><br></br> 
                    <Link to={'/'}>Upvoted submissions</Link><br></br> 
                    <Link to={'/'}>Upvoted comments</Link><br></br> 
                </h1>
                
            </div>
            

        )
    }
}

export default withRouter(Profile);


