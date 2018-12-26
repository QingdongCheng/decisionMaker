import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

//Default props
Header.defaultProps = {
    title: "Decision Maker"
};

export default Header;
