import React,{Component} from 'react';
import logo from './java.jpg';
import './Person.css';

const PersonList = (props) => {
    return(
        <div className="personstyle">
        <img src={logo} alt="logo" />
        <h1 className="" >{props.name}</h1>
        <p> {props.work}</p>
    </div>
    )
}
export default PersonList;