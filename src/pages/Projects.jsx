import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Projects = () => {
  const projects = [
    {
      title: 'Inventory Management System',
      subtitle: 'Full-stack Web App',
      period: 'Jan 2023 - Apr 2023',
      description: 'Built an inventory management system with React, Node.js, and MongoDB to track stock levels in real-time.',
    },
    {
      title: 'Personal Blog',
      subtitle: 'React + Markdown',
      period: 'Jun 2022 - Aug 2022',
      description: 'Created a personal blog platform supporting markdown posts with tagging and comments.',
    },
    {
      title: 'E-commerce Platform',
      subtitle: 'MERN Stack',
      period: 'Sep 2023 - Dec 2023',
      description: 'Developed a full-fledged e-commerce platform featuring user authentication, product catalog, and payment integration.',
    },
    {
      title: 'Chat Application',
      subtitle: 'React & Socket.io',
      period: 'Mar 2023 - May 2023',
      description: 'Built a real-time chat app with rooms and private messaging using Socket.io and React.',
    },
    {
      title: 'AI-powered Resume Screener',
      subtitle: 'Python & Machine Learning',
      period: 'Nov 2022 - Jan 2023',
      description: 'Designed a resume screening tool using NLP techniques to rank candidates based on job descriptions.',
    },
  ];

  // To trigger animation on mount (fade + slide up)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        section {
          padding: 4rem 2rem;
          max-width: 900px;
          margin: 0 auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        h1 {
          font-size: 3rem;
          color: #0d6efd;
          margin-bottom: 2.5rem;
          border-bottom: 3px solid #0d6efd;
          padding-bottom: 0.4rem;
          font-weight: 700;
          text-align: center;
        }
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .project-card {
          opacity: 0;
          transform: translateY(30px);
          animation-fill-mode: forwards;
          animation-name: fadeSlideUp;
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(13, 110, 253, 0.15);
          border-radius: 12px;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          background-color: white;
        }
        .project-card:hover {
          box-shadow: 0 12px 40px rgba(13, 110, 253, 0.3);
          transform: translateY(-5px);
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 600px) {
          section {
            padding: 3rem 1rem;
          }
          h1 {
            font-size: 2.4rem;
          }
        }
      `}</style>

      <section>
        <h1>Projects</h1>
        <div className="projects-list">
          {projects.map((proj, i) => (
            <div
              key={proj.title}
              className="project-card"
              style={{ animationDelay: mounted ? `${i * 150}ms` : '0ms' }}
            >
              <Card
                title={proj.title}
                subtitle={proj.subtitle}
                period={proj.period}
                description={proj.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
