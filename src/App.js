import React, {Component} from 'react';
import Footer from './presenters/Footer';
import Header from './presenters/Header';
import Main from './presenters/Main';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
        };
    }

    toggleSidebar = () => {
        this.setState({isSidebarOpen: !this.state.isSidebarOpen});
    };

    render() {
        const {isSidebarOpen} = this.state;
        return (
            <div className="content">
                <Header isSidebarOpen={isSidebarOpen} toggleSidebar={this.toggleSidebar}/>
                <Main isSidebarOpen={isSidebarOpen}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
