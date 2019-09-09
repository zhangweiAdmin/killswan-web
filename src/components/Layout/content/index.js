import './index.css';
import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <article className="article">
				<div>{this.props.children}</div>
			</article>
        );
    }
}
export default Content;
