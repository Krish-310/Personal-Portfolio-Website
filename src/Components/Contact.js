import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ArrowUpRight } from 'react-bootstrap-icons';
import emailjs from '@emailjs/browser';

const initialDetails = { name: '', email: '', message: '' };

export const Contact = () => {
  const [details, setDetails] = useState(initialDetails);
  const [sending, setSending] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState(null);
  const pending = useRef(false);
  const update = (event) => setDetails(previous => ({ ...previous, [event.target.name]: event.target.value }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (pending.current) return;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus({ success: false, message: 'The form is unavailable right now. Please email me directly using the link here.' });
      return;
    }
    pending.current = true;
    setSending(true);
    setStatus(null);
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: details.name.trim(), from_email: details.email.trim(),
        phone: '', message: details.message.trim(), to_email: 'k2kochar@uwaterloo.ca',
      }, publicKey);
      setDetails(initialDetails);
      setStatus({ success: true, message: 'Thanks for reaching out! Your message has been sent.' });
    } catch {
      setStatus({ success: false, message: 'Your message could not be sent. Please try again or email me directly.' });
    } finally {
      pending.current = false;
      setSending(false);
    }
  };
  return (
    <section className="contact home-section" id="connect" aria-labelledby="contact-heading">
      <Container>
        <div className="contact-summary"><h2 id="contact-heading">Contact</h2><div><a className="text-link email-link" href="mailto:k2kochar@uwaterloo.ca">k2kochar@uwaterloo.ca <ArrowUpRight aria-hidden="true" /></a><button type="button" className="form-toggle" aria-expanded={showForm} aria-controls="contact-panel" onClick={() => setShowForm(open => !open)}>{showForm ? 'Close the contact form' : 'Use the contact form'}</button></div></div>
        <div id="contact-panel" hidden={!showForm}>
        <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact Krish" aria-busy={sending}>
          <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} value={details.name} onChange={update} placeholder="Name" disabled={sending} />
          <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={details.email} onChange={update} placeholder="you@example.com" disabled={sending} />
          <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="4" required maxLength={5000} value={details.message} onChange={update} placeholder="Your message" disabled={sending} />
          <button className="button button-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <ArrowUpRight aria-hidden="true" /></button>
          <p className={`form-status ${status?.success ? 'success' : ''}`} role="status" aria-live="polite">{status?.message}</p>
        </form>
        </div>
      </Container>
    </section>
  );
};
