import React, {Component} from 'react';
import Sidebar from '../Sidebar';
import Counter from '../../components/Counter';

export default class extends Component {
    render() {
        const {isSidebarOpen} = this.props;
        return (
            <div className="main">
                <Sidebar isOpen={isSidebarOpen}/>
                <Counter/>
            </div>
        );
    }

}