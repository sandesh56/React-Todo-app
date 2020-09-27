import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/About'>About</Link>
        </header>
    );
}
//headerstyle
const headerStyle = {
    backgroundColor: "#1f1413",
    color: "#fff",
    padding: '15px',
    textAlign: "center",
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};
export default Header;