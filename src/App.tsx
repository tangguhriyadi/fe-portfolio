import { Layout } from "antd";
import React from "react";
/* import logo from './logo.svg'; */
import "./App.css";
import AppFooter from "./components/common/AppFooter";
import AppHeader from "./components/common/AppHeader";
import AppHome from "./components/views/AppHome";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
