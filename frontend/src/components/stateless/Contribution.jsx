import React, { Component } from 'react';

class Contribution extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.item.title}</h4>
                <p>Kind: {this.props.item.kind}</p>
                <p>Author: {this.props.item.author}</p>
                <p>Number of votes: {this.props.item.number_votes}</p>
                <p>Created at: {this.props.item.created_at}</p>
                <p>Text: {this.props.item.question}</p>
                <p>Url: {this.props.item.url}</p>
            </div>
        )
    }
}

export default Contribution;

