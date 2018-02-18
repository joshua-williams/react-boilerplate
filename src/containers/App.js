import React from 'react';
import Greeting from '../components/greeting.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "You are now ready to build with React.js"
        };
    }

    render() {
        console.log('rendering app');
        return <Greeting message={this.state.message} />;
    }
}

export default App;