import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/gaddamvivek01@gmail.com', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Email</h3>
            <p>gaddamvivek01@gmail.com</p>

            <h3>Phone</h3>
            <p>+1 (518) 844 3684</p>

            <h3>Availability</h3>
            <p>Open to full-time opportunities</p>
          </div>

          <div className="contact-form">
            <h3>Get in Touch</h3>

            {submitStatus === 'success' && (
              <div className="alert alert-success">
                <strong>Success!</strong> Your message has been sent. I'll get back to you soon!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-error">
                <strong>Error!</strong> Failed to send. Please email me directly at gaddamvivek01@gmail.com
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={isSubmitting ? 'submitting' : ''}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
