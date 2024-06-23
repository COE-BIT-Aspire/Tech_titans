import React from 'react';

class Car extends React.Component {
    constructor() {
        super();//this will inherit state and setState from React.Component and we can access them using this.state and this.setState
        //but the state will be initialized in the constructor only and functional component use useState to initialize the state
        this.state = {
            col: 'red'
        };
    }
    render() {
        return (
            <div>
                <h1>My car color is {this.state.col}</h1>
                <button onClick={()=>{this.setState({col: 'blue'})}}>Change color</button>
            </div>
        );
    }
}

export default Car;