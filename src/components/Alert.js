import React, {Component} from 'react';
import '../styling/alert.css';

class Alert extends Component{
    constructor(props){
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        }
    }

    render(){
        return(
           <div className="alert">
               <p style={this.getStyle()}>{this.props.text}</p>
           </div>
        )
    }
}

class InfoAlert extends Alert {
    constructor(props){
        super(props);
        this.color = 'yellow';
    }
}

class ErrorAlert extends Alert {
    constructor(props){
        super(props);
        this.color='red';
    }
}

export {InfoAlert, ErrorAlert};