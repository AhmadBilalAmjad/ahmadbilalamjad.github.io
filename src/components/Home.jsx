import React, { useState } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

import SideNav from './partials/SideNav';

import '../styles/admin.css'

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const { Content } = Layout;

  const handleToggleIcon = () => setIsCollapsed(!isCollapsed) 

  const getToggleIcon = () => (
    isCollapsed ? <MenuUnfoldOutlined className='toggle' onClick={handleToggleIcon} /> : <MenuFoldOutlined className='toggle' onClick={handleToggleIcon} />
  )

  return (
      <Layout>
      <SideNav isCollapsed={isCollapsed} />
      <Layout className="site-layout">
        <div className='toggle-wrapper'>
          {getToggleIcon()}
        </div>
        <Content className="site-layout-background">
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
