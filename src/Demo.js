import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
const Demo = ({name}) => {
    return <div className="maindiv_style ">
        <h1> KRUNAL{name}</h1>
        <p> Welcome to Bridgelabz</p>
    </div>
}
// class Demo extends Component {
//     render() {
//         return <div className="maindiv_style ">
//             <h1> KRUNAL{this.props.name}</h1>
//             <p> Welcome to Bridgelabz</p> 
//         </div>
//     }
// }
export default Demo;