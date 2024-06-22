import React, {Component} from "react";

export default class wishing extends Component{
    constructor(props) {
        super(props)

        this.state = {
            username:"Sujeeth",
            location: "Namakkal"
        }
    }
    changeName(event){
        this.setState({
            username:event.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Hi! {this.state.username} from {this.state.location} .. Welcome</h1>
                <input type="text" name="username" value={this.state.username} onChange={(event)=>this.changeName(event)}></input>
            </div>
        )
    }
}