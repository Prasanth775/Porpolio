import React, { useEffect, useState } from 'react';

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section style={styles.container}>
      <div
        style={{
          ...styles.card,
          opacity: animate ? 1 : 0,
          transform: animate ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <h1 style={styles.heading}>About Me</h1>
        <p
          style={{
            ...styles.intro,
            opacity: animate ? 1 : 0,
            transition: 'opacity 1s ease 0.3s',
          }}
        >
          Hello! I’m <span style={styles.highlight}>Prasanth Kumar</span>, an experienced software developer specializing in full-stack web development. I’m passionate about crafting clean, efficient, and maintainable code that delivers real-world solutions.
        </p>

        <div
          style={{
            ...styles.section,
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
          }}
        >
          <h2 style={styles.subheading}>Education</h2>
          <p style={styles.text}>
            Bachelor of Technology in Computer Science & Engineering (Artificial Intelligence) from <strong>Annamacharya Institute of Technology & Sciences, Rajampeta</strong>.
          </p>
        </div>

        <div
          style={{
            ...styles.section,
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateX(0)' : 'translateX(30px)',
            transition: 'opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s',
          }}
        >
          <h2 style={styles.subheading}>Technical Skills</h2>
          <ul style={styles.list}>
            <li>Proficient in JavaScript, React, Node.js, Express.js</li>
            <li>Experienced with REST APIs, MongoDB, and SQL databases</li>
            <li>Knowledgeable in cloud platforms like AWS and Azure</li>
            <li>Strong understanding of AI concepts and machine learning fundamentals</li>
          </ul>
        </div>

        <div
          style={{
            ...styles.section,
            opacity: animate ? 1 : 0,
            transform: animate ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease 0.9s, transform 0.6s ease 0.9s',
          }}
        >
          <h2 style={styles.subheading}>Passion & Approach</h2>
          <p style={styles.text}>
            I thrive on problem-solving and continuously learning new technologies. I believe in writing scalable and maintainable code, emphasizing best practices and clean architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
    background:
      'linear-gradient(135deg, #1f2a44, #3b4a6b)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: '#f9faff',
    maxWidth: '700px',
    width: '100%',
    padding: '2.5rem 3rem',
    borderRadius: '15px',
    boxShadow: '0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)',
    color: '#222',
    opacity: 0,             // default hidden for animation
    transform: 'translateY(40px)', // default down for animation
  },
  heading: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#2c3e50',
    borderBottom: '3px solid #3b5998',
    paddingBottom: '0.3rem',
  },
  highlight: {
    color: '#3b5998',
  },
  intro: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    marginBottom: '2rem',
    color: '#34495e',
    opacity: 0,
  },
  section: {
    marginBottom: '1.8rem',
    opacity: 0,
    transform: 'translateX(-30px)',
  },
  subheading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '0.6rem',
    color: '#2c3e50',
  },
  text: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: '#4d5d75',
  },
  list: {
    margin: 0,
    paddingLeft: '1.3rem',
    color: '#4d5d75',
    fontSize: '1rem',
    lineHeight: 1.6,
    listStyleType: 'disc',
  },
};

export default About;
