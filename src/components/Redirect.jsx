import React from "react";
import { Layout, Typography, Spin, Space } from "antd";
import Header from "./partials/Header";

import "../styles/home.css";
const { Title } = Typography;
const { Content } = Layout;

const Redirect = () => {
  window.location.href = 'https://ahmadbilalamjad.vercel.app/';

  return (
    <Layout>
      <Header />
      <Content className="site-layout">
        <div className="site-layout-background">
          <Space size="large" direction="vertical" align="center">
            <Spin size="large" />
            <Title>Redirecting...</Title>
          </Space>
        </div>
      </Content>
    </Layout>
  )
}

export default Redirect