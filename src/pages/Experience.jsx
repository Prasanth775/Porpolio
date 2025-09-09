import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Experience = () => {
  const jobs = [
    {
      title: 'Software Engineer',
      subtitle: 'TechCorp Inc.',
      period: 'May 2023 - Present',
      description: 'Developed and maintained scalable web applications, collaborating with cross-functional teams.',
    },
    {
      title: 'Junior Developer',
      subtitle: 'Web Solutions LLC',
      period: 'Jan 2021 - Apr 2023',
      description: 'Contributed to front-end and back-end development of client projects, improving performance by 20%.',
    },
    {
      title: 'Intern Developer',
      subtitle: 'InnovateX Labs',
      period: 'Jun 2020 - Dec 2020',
      description: 'Assisted in building internal tools and debugging issues, gaining practical software development experience.',
    },
    {
      title: 'Freelance Web Developer',
      subtitle: 'Self-employed',
      period: 'Mar 2019 - May 2020',
      description: 'Created websites for small businesses and individuals, focusing on responsive design and usability.',
    },
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        section {
          max-width: 850px;
          margin: 0 auto;
          padding: 4rem 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #1a1a2e;
        }

        h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #0d6efd;
          border-bottom: 3px solid #0d6efd;
          padding-bottom: 0.3rem;
          margin-bottom: 3rem;
          text-align: center;
        }

        .job-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .job-card {
          background: white;
          border-radius: 14px;
          box-shadow: 0 10px 28px rgba(13, 110, 253, 0.15);
          padding: 2rem 2.5rem;
          opacity: 0;
          transform: translateY(35px);
          animation-fill-mode: forwards;
          animation-name: fadeSlideUp;
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          cursor: default;
        }

        .job-card:hover {
          box-shadow: 0 15px 45px rgba(13, 110, 253, 0.3);
          transform: translateY(-5px);
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 650px) {
          section {
            padding: 3rem 1rem;
          }
          h1 {
            font-size: 2.4rem;
            margin-bottom: 2rem;
          }
          .job-card {
            padding: 1.5rem 1.8rem;
          }
        }
      `}</style>

      <section>
        <h1>Experience</h1>
        <div className="job-list">
          {jobs.map((job, i) => (
            <div
              key={job.title + job.period}
              className="job-card"
              style={{ animationDelay: mounted ? `${i * 180}ms` : '0ms' }}
            >
              <Card
                title={job.title}
                subtitle={job.subtitle}
                period={job.period}
                description={job.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
