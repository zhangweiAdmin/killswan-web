import './index.css';
import React from 'react';

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.asideCrol = this.asideCrol.bind(this);
        this.state = {
            toggle: false
        }
    }

    asideCrol() {
        this.setState(state => ({
            toggle: !state.toggle
        }));
        
    }
    
    render () {
        return (
            <aside className={`aside ${this.state.toggle ? 'close' : 'open'}`}>
				<div className="aside-crol" onClick={this.asideCrol}></div>
                <div class="children">{this.props.children}</div>
			</aside>
        );
    }
}
export default Aside;
