import React from 'react';
import { Card, Layout, Tag } from 'antd';

import Header from './partials/Header';
import '../styles/home.css';

const Projects = () => {
    const { Meta } = Card;

    const projects = [
        {
            image: '../images/fish-store.png',
            name: 'Fish Selling Store',
            types: ['javscript', 'react'],
            technologies: ['HTML 5', 'CSS 3', 'Firebase', 'React JS', 'JavaScript'],
            link: 'https://github.com/AhmadBilalAmjad/Fishes-Store/',
            isUp: true
        },
        {
            image: '../images/fish-store.png',
            name: 'Fish Selling Store',
            types: ['javscript', 'react'],
            technologies: ['HTML 5', 'CSS 3', 'Firebase', 'React JS', 'JavaScript'],
            link: 'https://github.com/AhmadBilalAmjad/Fishes-Store/',
            isUp: true
        },
        {
            image: '../images/fish-store.png',
            name: 'Fish Selling Store',
            types: ['javscript', 'react'],
            technologies: ['HTML 5', 'CSS 3', 'Firebase', 'React JS', 'JavaScript'],
            link: 'https://github.com/AhmadBilalAmjad/Fishes-Store/',
            isUp: true
        }
    ]

    return (
        <Layout>
            <Header />
            <Layout className='projects-wrapper'>
            {projects.map(project => (
                <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt={project.name} src={project.image} />}
                >
                    <Meta title={project.name} description="www.instagram.com" />
                    <div style={{ marginTop: 5 }}>
                    <p>Technologies Used</p>    
                        {project.technologies.map(tech => (
                            <Tag color="purple" style={{ margin: 5 }}>{tech}</Tag>
                        ))}
                    </div>
                </Card>
            ))}
            </Layout>
        </Layout>
    );
}

export default Projects;
