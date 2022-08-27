import React from 'react';

export default class Astronaut extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                
                <h2>{this.props.name}</h2>
                <h1>{this.props.craft}</h1>

            </React.Fragment>
        )
    }
}