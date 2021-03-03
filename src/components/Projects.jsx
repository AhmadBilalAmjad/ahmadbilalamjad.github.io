import React from "react";
import { Card, Layout, Tag, Typography, Button, Result } from "antd";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import * as data from ".././data.json";

import "../styles/home.css";

const Projects = () => {
  const { Meta } = Card;
  const { Title } = Typography;

  return (
    <Layout style={{ background: "white" }}>
      <Header />
      {/* <Layout className="projects-wrapper" style={{ background: "white" }}>
        {data.projects.map((project) => (
          <Card
            key={project.name}
            hoverable
            style={{ width: 300 }}
            cover={<img alt={project.name} src={project.image} />}
          >
            <Meta title={project.name} description={project.description} />
            <div style={{ marginTop: 10 }}>
              <Title level={4} className="technologies-used">
                Technologies Used
              </Title>
              {project.technologies.map((tech) => (
                <Tag key={tech} color="purple" style={{ margin: 5 }}>
                  {tech}
                </Tag>
              ))}
            </div>
            <div className="project-link-wrapper">
              <Button block disabled={!project.link}>
                <a
                  href={project.link}
                  alt={project.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {!project.link
                    ? "Comming Soon..."
                    : project.isUp
                    ? "View Live"
                    : "View On Github"}
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </Layout> */}
      <Layout style={{ background: "white", marginTop: 105 }}>
        <Result
          status="404"
          title="In Progress &#128578;"
        />
      </Layout>
      <Footer />
    </Layout>
  );
};

export default Projects;
