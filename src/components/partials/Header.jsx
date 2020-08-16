import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Layout } from 'antd';


const Header = () => {
    const { Item } = Menu;
    const { Header } = Layout;
    const history = useHistory();
    
    return (
        <Header className='header'>
            <Menu mode="horizontal" defaultSelectedKeys={['home']} style={{ display: 'flex', justifyContent: 'center' }}>
                <Item key="home" onClick={() => history.push('/')}>
                    Home
                </Item>
                <Item key="projects" onClick={() => history.push('/projects')}>Projects</Item>
            </Menu>
        </Header>
    );
}

export default Header;
