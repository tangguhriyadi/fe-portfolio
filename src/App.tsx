import { Layout } from 'antd';
import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import AppHeader from './components/common/AppHeader';
import AppHome from './components/views/AppHome';

const {Header, Content} = Layout

function App() {
  return (
    <Layout className='mainLayout'>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
