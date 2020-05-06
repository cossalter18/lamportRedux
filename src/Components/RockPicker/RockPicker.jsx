import React, { Component } from 'react';

class RockPicker extends Component {
    state = {
        rocks: 0
    }

    componentDidMount() {
        console.log(this.props);

    }


    clickHandler = (event, property) => {
        console.log('in clickHandler', event, property);
        if (property === 'pickup') {
            this.setState({
                rocks: this.state.rocks + 1
            })
            this.props.dispatch({type: 'pickup', payload: 1})
        }
        else if (property === 'drop') {
            this.setState({
                rocks: this.state.rocks - 1
            })
            this.props.dispatch({ type: 'drop', payload: 1 })
        }
        else if (property === 'scoop') {
            this.setState({
                rocks: this.state.rocks + 5
            })
            this.props.dispatch({ type: 'scoop', payload: 5 })
        }
        else if (property === 'dropAll') {
            this.setState({
               rocks: 0
            })
            this.props.dispatch({ type: 'drop', payload: this.state.rocks })
        }

    };// end click handler


    render() {
        return (
            <div>
                <h2>Rock Pickers</h2>
                <h3>{this.state.rocks}</h3>
                <button onClick={(event) => this.clickHandler(event, 'pickup')}>Pick up Rock</button>
                <button onClick={(event) => this.clickHandler(event, 'drop')}>Drop a Rock</button>
                <button onClick={(event) => this.clickHandler(event, 'scoop')}>Scoop up Rocks</button>
                <button onClick={(event) => this.clickHandler(event, 'dropAll')}>Drop All Rocks</button>
            </div>
        )// end return
    }//end render
}//end class

export default RockPicker