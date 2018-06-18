import React from 'react';

const SidebarButton = ({isToggled, handleClick}) => {
    const lineClass = `button__line ${isToggled ? 'active' : ''}`;

    return (
        <div className="button" onClick={handleClick}>
            <div className={lineClass}/>
            <div className={lineClass}/>
            <div className={lineClass}/>
        </div>
    );
};

SidebarButton.displayName = 'SidebarButton';

export default SidebarButton;
