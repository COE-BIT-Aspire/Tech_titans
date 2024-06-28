import React from 'react';

class Car extends React.Component {
    constructor() {
        super();//this will inherit state and setState from React.Component and we can access them using this.state and this.setState
        //but the state will only be initialized in the constructor and functional component use useState to initialize the state
        this.state = {
            col: 'red',
            model:'Ford'
        };
    }
    render() {
        return (
            <div>
                <h1>My car is a {this.state.col} colored {this.state.model} </h1>
                {/* <button onClick={() => { this.setState({ col: 'blue' }) }}>Change color</button> */}
                <button onClick={()=>{this.setState(previousState=>({...previousState,col:'blue'}))}}>Change color</button>
            </div>
        );
    }
}

export default Car;