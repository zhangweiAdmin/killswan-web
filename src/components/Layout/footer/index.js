import './index.css';
import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                {this.props.children}
			</footer>
        );
    }
}
export default Footer;
