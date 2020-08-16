import React from 'react';
import { Layout, Menu, Typography, Card } from 'antd';
import { useHistory } from 'react-router-dom';

import '../styles/home.css'

const Home = () => {
  const { Header, Content, Footer } = Layout;
  const { Item } = Menu;
  const { Title } = Typography;
  const history = useHistory();

  return (
    <Layout>
    <Header className='header'>
      <Menu mode="horizontal" defaultSelectedKeys={['home']} style={{ display: 'flex', justifyContent: 'center' }}>
        <Item key="home" onClick={() => history.push('/')}>
            Home
          </Item>
        <Item key="projects" onClick={() => history.push('/projects')}>Projects</Item>
      </Menu>
    </Header>
    <Content className="site-layout">
      <div className="site-layout-background">
        <Title>I'm Ahmad Bilal Amjad</Title>
        <Title level={2}>I'm a Software Engineer / Full Stack Developer</Title>
      </div>
    </Content>
    <Title className='skills'>SKILLS</Title>
    <Layout className='skills-card-wrapper'>
      <Card size="small" title="FRONT END" style={{ width: 200 }}>
        <ul className='card-body'>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li className='bold-purple'>REACT JS</li>
          <li>JQUERY</li>
        </ul>
      </Card>
      <Card size="small" title="STYLING" style={{ width: 200 }}>
        <ul className='card-body'>
          <li>SASS</li>
          <li className='bold-purple'>MATERIAL UI</li>
          <li className='bold-purple'>ANTD</li>
          <li>BOOTSTRAP 4*</li>
          <li>MATERIALIZE CSS</li>
        </ul>
      </Card>
      <Card size="small" title="BACK END" style={{ width: 200 }}>
        <ul className='card-body'>
          <li className='bold-purple'>NODE JS</li>
          <li className='bold-purple'>EXPRESS JS</li>
          <li>LARAVEL</li>
          <li>DJANGO</li>
          <li>ORM</li>
        </ul>
      </Card>
      <Card size="small" title="LANGUAGES" style={{ width: 200 }}>
        <ul className='card-body'>
          <li className='bold-purple'>JAVASCRIPT</li>
          <li className='bold-purple'>TYPESCRIPT</li>
          <li>PYTHON</li>
          <li>PHP</li>
        </ul>
      </Card>
      <Card size="small" title="DATABASES" style={{ width: 200 }}>
        <ul className='card-body'>
          <li className='bold-purple'>MONGODB</li>
          <li className='bold-purple'>MYSQL</li>
          <li>POSTGRESQL</li>
        </ul>
      </Card>
      <Card size="small" title="TESTING" style={{ width: 200 }}>
        <ul className='card-body'>
          <li className='bold-purple'>JEST</li>
          <li className='bold-purple'>MOCHA</li>
          <li>CHAI</li>
        </ul>
      </Card>
    </Layout>
    <Footer className='footer'>Copyright ©{new Date().getFullYear()} Created by Ahmad Bilal Amjad</Footer>
  </Layout>
  );
}

export default Home;
