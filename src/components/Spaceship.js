import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Spaceship extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>Speed: {this.props.speed}</h2>
                <h2>Has Rockets: {this.props.hasRockets}</h2>
                <small>Colors: {this.props.colors.join(', ')}</small>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    name: "",
    speed: "slow",
    hasRockets: false,
    colors: ['black', 'red']
};