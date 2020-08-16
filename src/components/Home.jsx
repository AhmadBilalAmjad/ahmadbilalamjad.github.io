import React from 'react';
import { Layout, Menu, Typography } from 'antd';

import '../styles/home.css'

const Home = () => {
  const { Header, Content, Footer } = Layout;
  const { Item } = Menu;
  const { Title } = Typography;

  return (
    <Layout>
    <Header className='header'>
      <Menu mode="horizontal" defaultSelectedKeys={['home']} style={{ display: 'flex', justifyContent: 'center' }}>
        <Item key="home">Home</Item>
        <Item key="projects">Projects</Item>
      </Menu>
    </Header>
    <Content className="site-layout">
      <div className="site-layout-background">
        <Title>I'm Ahmad Bilal Amjad</Title>
        <Title level={2}>I'm a Software Engineer/Full Stack Developer</Title>
      </div>
    </Content>
    <Footer className='footer'>Copyright ©{new Date().getFullYear()} Created by Ahmad Bilal Amjad</Footer>
  </Layout>
  );
}

export default Home;
