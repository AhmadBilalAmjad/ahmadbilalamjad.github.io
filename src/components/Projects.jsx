import React from "react";
import { Card, Layout, Tag, Typography, Button } from "antd";

import Header from "./partials/Header";
import * as data from ".././data.json";

import "../styles/home.css";

const Projects = () => {
  const { Meta } = Card;
  const { Title } = Typography;

  return (
    <Layout>
      <Header />
      <Layout className="projects-wrapper">
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
              <Button block>
                <a
                  href={project.link}
                  alt={project.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View {project.isUp ? "Live" : "On Github"}
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </Layout>
    </Layout>
  );
};

export default Projects;
