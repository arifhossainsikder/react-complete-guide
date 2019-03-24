import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 26},
            {name: 'Manu', age: 28},
        ],
        otherState: 'This is another value'
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Max', age: 26},
            ],
        })
    }


    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 26},
            ],
        })
    }


    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>This is a react app.</h1>
                <button style={style} onClick={this.switchNameHandler.bind(this, 'Max!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    changed={this.nameChangeHandler}
                />
            </div>
        );
    }
}

export default App;
