import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, GithubOutlined, CodeOutlined, LinkedinOutlined } from '@ant-design/icons';

import '../../styles/SideNav.css';

const SideNav = ({ isCollapsed }) => {
    const { Item } = Menu;
    const { Sider } = Layout;

    return (
        <Sider trigger={null} collapsible collapsed={isCollapsed} className='side-nav'>
          <Menu mode="inline" defaultSelectedKeys={['home']}>
            <Item key="home" icon={<HomeOutlined />}>
              Home
            </Item>
            <Item key="projects" icon={<CodeOutlined />}>
              Projects
            </Item>
            <Item key="github" icon={<GithubOutlined />}>
              Github
            </Item>
            <Item key="linkedin" icon={<LinkedinOutlined />}>
              Linkedin
            </Item>
          </Menu>
        </Sider>
    );
}

export default SideNav;
