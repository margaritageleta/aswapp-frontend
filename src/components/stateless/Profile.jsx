import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Description:
                    <input type="text" value={this.props.user.description} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" onClick={this.redirectPost.bind(this)} />
            </form>

        )
    }
}

export default withRouter(Profile);


