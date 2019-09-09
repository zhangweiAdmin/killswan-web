import './index.css';
import React from 'react';

class Header extends React.Component {
    asideCrol() {
        
    }
    render () {
        return (
            <header className="header">
                {this.props.children}
			</header>
        );
    }
}
export default Header;
