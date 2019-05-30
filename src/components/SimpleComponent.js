import React, {Component} from 'react';

class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    handleClick = () => {
        let currentMood = (this.state.mood === 'happy' ? 'sad' : 'happy');
        this.setState({
            mood: currentMood
        });
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h3>{this.state.mood}</h3>
            </div>
        )
    }
}

export default SimpleComponent
