/**
 * Created by ibm on 1/21/2018.
 */
import React, { Component } from 'react';
class Clock extends Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
        this.update= this.update.bind(this);
    }
    componentDidMount(){
        setInterval(update,1000);// we can't directly call update here, otherwise will lost this
    }
    update(){
        this.setState({date: new Date()});
    }
    render(){
        return (<p>{this.state.date.toLocaleTimeString()}</p>);
    }

}

export default Clock;
