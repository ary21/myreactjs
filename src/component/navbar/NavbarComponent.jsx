import React from 'react';

const NavComponent = (props) => {
    return (<li><a href={props.link} >{props.text}</a></li>)
}

NavComponent.defaultProps = {
    text: 'Menu',
    link: '#'
}

export default NavComponent;