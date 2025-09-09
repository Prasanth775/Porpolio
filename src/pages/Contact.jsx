import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    setAnimateForm(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        section {
          max-width: 480px;
          margin: 3rem auto;
          padding: 2rem 1.5rem;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #1a1a2e;
          text-align: center;
        }

        h1 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #0d6efd;
          margin-bottom: 2rem;
          user-select: none;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation-fill-mode: forwards;
          animation-name: slideInUp;
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        label {
          font-weight: 600;
          margin-bottom: 0.4rem;
          display: block;
          text-align: left;
          color: #333;
          user-select: none;
        }

        input,
        textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          border: 2px solid #ddd;
          border-radius: 12px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          font-family: inherit;
          resize: vertical;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #0d6efd;
          box-shadow: 0 0 8px rgba(13, 110, 253, 0.4);
          background-color: #f9fbff;
        }

        button {
          margin-top: 1rem;
          padding: 0.75rem 1.5rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          background-color: #0d6efd;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
          box-shadow: 0 6px 15px rgba(13, 110, 253, 0.4);
        }

        button:hover {
          background-color: #084bcc;
          box-shadow: 0 10px 25px rgba(8, 75, 204, 0.6);
        }

        button:active {
          transform: scale(0.97);
        }

        p.thankyou {
          font-size: 1.4rem;
          color: #28a745;
          font-weight: 600;
          opacity: 0;
          animation: fadeIn 0.8s forwards;
          user-select: none;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        /* Responsive */
        @media (max-width: 500px) {
          section {
            margin: 2rem 1rem;
            padding: 1.5rem 1rem;
          }

          h1 {
            font-size: 2.2rem;
          }

          button {
            font-size: 1rem;
          }
        }
      `}</style>

      <section>
        <h1>Contact Me</h1>
        {submitted ? (
          <p className="thankyou">
            Thanks for reaching out! I'll get back to you soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ animationPlayState: animateForm ? 'running' : 'paused' }}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write your message here..."
              />
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </section>
    </>
  );
};

export default Contact;
