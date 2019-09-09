import './index.css';
import React from 'react';

class Substance extends React.Component {
    render () {
        return (
            <div className="content-bg">
                <div className="cont-frame">
                    <div class="src-title"></div>
                    <div class="src"></div>
                </div>
                <div className="cont-frame">
                    <div class="dest-title"></div>
                    <div class="dest"></div>
                </div>
            </div>
        );
    }
}
export default Substance;
