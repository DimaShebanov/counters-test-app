import React from 'react';

const Sidebar = props => {
    let {isOpen} = props,
        contentClass = `sidebar ${isOpen ? 'shown' : ''}`;

    // here i could use TransitionGroup or make something like that on my own,
    // but I thought that it would be waste of time
    return (
        <div className={contentClass}>
            some sidebar content
        </div>
    );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
