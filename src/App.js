// create your App component here
import React from 'react';

class App extends React.Component{

    state={
        team: []
    }

    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(astros => 
            this.setState({
                team: astros
            })
        )
    }


    render(){
        return(
            <div>

            </div>
        )
    }
}

export default App;