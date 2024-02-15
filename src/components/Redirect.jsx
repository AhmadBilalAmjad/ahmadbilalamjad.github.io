import React, { useState, useEffect } from 'react'
import { Layout, Typography } from "antd";
import Header from "./partials/Header";

import "../styles/home.css";
const { Title } = Typography;
const { Content } = Layout;

const Redirect = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
    
      if(!count) {
        window.location.href = 'https://ahmadbilalamjad.vercel.app/';
      }
      return () => {
        clearInterval(interval)
      }
    }, [count])

    return (
        <Layout>
            <Header />
            <Content className="site-layout">
                <div className="site-layout-background">
                    <Title>You will be redirected to new website in {count} seconds :)</Title>
                </div>
            </Content>
        </Layout>
    )
}

export default Redirect