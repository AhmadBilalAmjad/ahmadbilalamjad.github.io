import React from "react";
import { Layout, Typography, Card } from "antd";
import {
  HeartFilled,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import Header from "./partials/Header";
import * as data from ".././data.json";

import "../styles/home.css";

const Home = () => {
  const { Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <Layout>
      <Header />
      <Content className="site-layout">
        <div className="site-layout-background">
          <Title>I'm Ahmad Bilal Amjad</Title>
          <Title level={2}>
            I'm a Software Engineer / Full Stack Developer
          </Title>
          <div>
            <a
              href="https://github.com/AhmadBilalAmjad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined
                style={{ color: "white", fontSize: 30, marginRight: 10 }}
              />
            </a>
            <a
              href="https://pk.linkedin.com/in/ahmadbilalamjad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined style={{ color: "white", fontSize: 30 }} />
            </a>
          </div>
        </div>
      </Content>
      <Title className="skills">SKILLS</Title>
      <Layout className="skills-card-wrapper">
        {data.skills.map((skill) => (
          <Card
            key={skill.name}
            size="small"
            hoverable
            title={skill.name}
            style={{ width: 200 }}
          >
            <ul className="card-body">
              {skill.items.map((item) => (
                <li key={item.name} className={item.isBold && "bold-purple"}>
                  {item.name}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Layout>
      <Footer className="footer">
        Made with <HeartFilled style={{ color: "red", fontSize: 18 }} /> by{" "}
        <span className="bold-purple"> Ahmad Bilal Amjad </span>
      </Footer>
    </Layout>
  );
};

export default Home;
