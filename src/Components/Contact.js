import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cats from '../Assets/Images/cats.png'
import emailjs from '@emailjs/browser'

export const Contact = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
          })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        
        // EmailJS configuration - you'll need to replace these with your actual values
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
        
        // Prepare template parameters for EmailJS
        const templateParams = {
          from_name: `${formDetails.firstName} ${formDetails.lastName}`,
          from_email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message,
          to_email: 'krishkochar@gmail.com', // Your email
        };

        try {
          const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
          console.log('Email sent successfully:', result);
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: 'Message sent successfully!' });
        } catch (error) {
          console.error('Email send failed:', error);
          setButtonText("Send");
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
      };

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={Cats} alt='Contact Me!' />
                </Col>
                <Col md={6}>
                    <h2> Get in Touch! </h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                            <input type="text" required value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                            <input type="text" required value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                            <input type="email" required value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col size={12} className="px-1">
                            <textarea rows="6" required value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                            status.message &&
                            <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
