import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Aside, Header, Content, Footer, Layout } from './components/Layout';
import Navis from './navis';
import Substance from './substance'
function App () {
    return (
        <div className="app">
			<Layout>
				<Aside><Navis></Navis></Aside>
				<Header>个人主页</Header>
				<Content><Substance></Substance></Content>
				<Footer>版权所有-违者必究</Footer>
			</Layout>
        </div>
    );
}

export default App;
