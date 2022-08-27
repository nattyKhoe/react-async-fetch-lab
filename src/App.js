// create your App component here
import React from 'react';
import Astronaut from './Astronaut'

export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            astronauts: []
        };
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                astronauts: data.people
            })
        })
        .catch(console.error)
    }

    render(){
        let astronauts = this.state.astronauts;
        return (
            astronauts.map(astronaut => (
                <Astronaut name={astronaut.name} craft={astronaut.craft}/>
            ))
        )
    }
}