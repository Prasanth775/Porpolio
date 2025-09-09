import React, { useEffect, useState } from 'react';

const Skills = () => {
  const technicalSkills = [
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Docker',
    'Java',
    'Python',
    'C++',
    'TypeScript',
    'AWS',
    'GraphQL',
  ];

  const softSkills = [
    'Teamwork',
    'Communication',
    'Problem Solving',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Leadership',
  ];

  // To trigger re-render after mount for animation
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* CSS animations */}
      <style>{`
        .skill-item {
          opacity: 0;
          transform: scale(0.8);
          animation-fill-mode: forwards;
          animation-name: fadeScaleIn;
          animation-duration: 0.4s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          user-select: none;
          box-shadow: 0 4px 10px rgba(13, 110, 253, 0.4);
          background-color: #0d6efd;
          color: white;
          padding: 0.6rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-item:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.7);
        }

        @keyframes fadeScaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <section style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Skills</h1>

          <div style={styles.skillSection}>
            <h2 style={styles.subheading}>Technical Skills</h2>
            <ul style={styles.skillList}>
              {technicalSkills.map((skill, i) => (
                <li
                  key={skill}
                  className="skill-item"
                  style={{ animationDelay: mounted ? `${i * 100}ms` : '0ms' }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.skillSection}>
            <h2 style={styles.subheading}>Soft Skills</h2>
            <ul style={styles.skillList}>
              {softSkills.map((skill, i) => (
                <li
                  key={skill}
                  className="skill-item"
                  style={{ animationDelay: mounted ? `${(technicalSkills.length + i) * 100}ms` : '0ms' }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

const styles = {
  container: {
    minHeight: '70vh',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: '#fefefe',
    maxWidth: '750px',
    width: '100%',
    padding: '2rem 3rem',
    borderRadius: '15px',
    boxShadow:
      '0 12px 25px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)',
    color: '#222',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '2rem',
    color: '#1a1a2e',
    borderBottom: '3px solid #0d6efd',
    paddingBottom: '0.3rem',
  },
  skillSection: {
    marginBottom: '2rem',
  },
  subheading: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#16213e',
  },
  skillList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: '0.8rem 1.2rem',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
};

export default Skills;
