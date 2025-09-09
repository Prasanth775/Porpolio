import React, { useEffect, useState } from 'react';

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let count = parseInt(localStorage.getItem('visitCount'), 10) || 0;
    count++;
    localStorage.setItem('visitCount', count);
    setVisitCount(count);
  }, []);

  useEffect(() => {
    const timeZone = 'Asia/Kolkata';
    const updateClock = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone,
      };
      setCurrentTime(now.toLocaleTimeString([], options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={styles.pageWrapper}>
      <section
        style={{
          ...styles.card,
          opacity: animate ? 1 : 0,
          transform: animate ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div style={styles.left}>
          <h1 style={styles.title}>
            Hi, I'm <span style={styles.highlight}>J.PRASANTH KUMAR</span>
          </h1>
          <h2 style={styles.subtitle}>
            Passionate Software Engineer | Full-Stack Developer | Problem Solver
          </h2>
          <p style={styles.description}>
            I specialize in building scalable, high-performance web applications using modern
            technologies like React, Node.js, and cloud services. With a strong foundation in
            computer science and a commitment to clean code, I deliver efficient and maintainable
            solutions.
          </p>

          <div style={styles.infoRow}>
            <div style={styles.infoBox}>
              <span style={styles.infoEmoji}>🕒</span>
              <div>
                <p style={styles.infoLabel}>Current time (India - IST):</p>
                <p style={styles.infoValue}>{currentTime || '--:--:--'}</p>
              </div>
            </div>
            <div style={styles.infoBox}>
              <span style={styles.infoEmoji}>👁️</span>
              <div>
                <p style={styles.infoLabel}>You've visited this page:</p>
                <p style={styles.infoValue}>
                  {visitCount} {visitCount === 1 ? 'time' : 'times'}
                </p>
              </div>
            </div>
          </div>

          <div style={styles.buttonsContainer}>
            <a href="/projects" style={{ ...styles.button, ...styles.primaryButton }}>
              View Projects
            </a>
            <a href="/contact" style={{ ...styles.button, ...styles.secondaryButton }}>
              Contact Me
            </a>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.imageWrapper}>
            <img
              src="/218931831.jpg"
              alt="Profile"
              style={styles.profileImage}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(97, 218, 251, 0.9)';
                e.currentTarget.style.transition = 'all 0.3s ease';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transition = 'all 0.3s ease';
              }}
            />
            <div style={styles.glossyOverlay} />
          </div>
        </div>
      </section>
    </main>
  );
};

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5', // Outer light gray background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    maxWidth: '900px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '2rem 2.5rem',
    gap: '2.5rem',
    color: '#1e1e2f',
  },
  left: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  right: {
    flex: '0 0 230px',
    position: 'relative',
  },
  title: {
    fontSize: '2.4rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    lineHeight: 1.1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  highlight: {
    color: '#3f88c5',
  },
  subtitle: {
    fontSize: '1.15rem',
    fontWeight: '600',
    marginBottom: '1.25rem',
    color: '#4a4a4a',
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.5,
    marginBottom: '1.75rem',
    color: '#555',
  },
  infoRow: {
    display: 'flex',
    gap: '1.8rem',
    marginBottom: '2rem',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    backgroundColor: '#e3f2fd',
    padding: '0.85rem 1.3rem',
    borderRadius: '10px',
    boxShadow: '0 6px 15px rgba(63, 136, 197, 0.15)',
    minWidth: '170px',
  },
  infoEmoji: {
    fontSize: '1.5rem',
  },
  infoLabel: {
    fontWeight: '600',
    color: '#3f88c5',
    marginBottom: '0.18rem',
  },
  infoValue: {
    fontWeight: '700',
    fontSize: '1.1rem',
    color: '#0d47a1',
    fontVariantNumeric: 'tabular-nums',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '1.3rem',
    flexWrap: 'wrap',
  },
  button: {
    padding: '0.65rem 1.8rem',
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '0.95rem',
    cursor: 'pointer',
    userSelect: 'none',
    textDecoration: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 15px rgba(63, 136, 197, 0.25)',
  },
  primaryButton: {
    backgroundColor: '#3f88c5',
    color: '#fff',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#3f88c5',
    border: '2px solid #3f88c5',
  },
  imageWrapper: {
    position: 'relative',
    width: '230px',
    height: '230px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(63, 136, 197, 0.3)',
    cursor: 'pointer',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  glossyOverlay: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '110px',
    height: '55px',
    borderRadius: '50% 50% 0 0',
    background: 'rgba(255, 255, 255, 0.3)',
    filter: 'blur(12px)',
    pointerEvents: 'none',
    transform: 'rotate(-15deg)',
  },
};

export default Home;
