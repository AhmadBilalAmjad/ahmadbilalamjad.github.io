import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';


const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const { Header, Sider, Content } = Layout;
  const { Item } = Menu;

    return (
        <Layout>
        <Sider trigger={null} collapsible collapsed={isCollapsed}>
          <div className="logo">
            ABA  
          </div>
          <Menu mode="inline" defaultSelectedKeys={['home']}>
            <Item key="home" icon={<UserOutlined />}>
              Home
            </Item>
            <Item key="projects" icon={<VideoCameraOutlined />}>
              Projects
            </Item>
            <Item key="github" icon={<UploadOutlined />}>
              Github
            </Item>
            <Item key="linkedin" icon={<UploadOutlined />}>
              Linkedin
            </Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setIsCollapsed(!isCollapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
}

export default Home;
