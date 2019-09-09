import Aside from './aside';
import Header from './header';
import Content from './content';
import Footer from './footer';
import React from 'react';
import './index.css';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        let comps = this.props.children;
        this.aside = comps[0];
        this.headerContFoot = comps.slice(1);
    }
    render () {
        return (
            <div className="layout">
                <div className="left">
                    {this.aside}
                </div>
                <div className="right">
                    {this.headerContFoot}
                </div>
            </div>
        );
    }
}

export {Layout,Aside,Header,Content ,Footer}
