import React, { Component } from 'react';
import logo from './java.jpg';
import './Person.css';
import logo1 from './Python.png'
import logo2 from './Dot-Net.jpg';

import PersonList from './PersonList';

// const Person = (props) => {

    class Person extends Component {
        constructor(){
            super();
            this.state = {
                name : "Welcome to Mumbai"
            }
        }
        namechange(){
            this.setState({
                name : "Welcome to Bridgelabz"
            })
        }

        render() {
            const personlistarray = [
                {
                    id: 1,
                    name: "Krunal",
                    work: "Java Developer",
                },
                {
                    id: 2,
                    name: "Ankit",
                    work: "Python Developer",
                },
                {
                    id: 3,
                    name: "Satish",
                    work: "Dot Net Developer",
                }
            ]

            const personcard = personlistarray.map((Personcard, index) => {
                return <PersonList key={index} id={personlistarray[0].name} name={personlistarray[index].name} work={personlistarray[index].work} />
            })

            return (<div className="mainpage">
                {/* <h1>Welcome to Bridgelabz</h1> */}
                {/* <img src={logo} alt="logo" />
        <PersonList id={personlistarray[0].name} name={personlistarray[0].name} work={personlistarray[0].work} />
        <img src={logo1} alt="logo1" />
        <PersonList id={personlistarray[1].name} name={personlistarray[1].name} work={personlistarray[1].work} />
        <img src={logo2} alt="logo2" />
        <PersonList id={personlistarray[2].name} name={personlistarray[2].name} work={personlistarray[2].work} /> */}
                <h1>{this.state.name}</h1>
                {personcard}
                <button onClick ={ () => this.namechange()}> Subcribe</button>
            </div>
            )
        }
    }
// }

export default Person;  