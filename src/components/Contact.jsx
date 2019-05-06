import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Footer from '../components/Footer';


const Contact = props => {
  return (
    <div ref={props.contact} className='contact-page'>
      <h1>Contact</h1>
      <Form
        className='contact-form'
        action='https://formspree.io/fangmichael@gmail.com'
        method='POST'
      >
        <Form.Group className='input'>
          <Form.Control type='text' name='name' placeholder='Name' />
        </Form.Group>
        <Form.Group className='input'>
          <Form.Control type='email' name='_replyto' placeholder='Email' />
        </Form.Group>
        <Form.Group>
          <Form.Control
          className='input'
            as='textarea'
            rows='4'
            name='message'
            placeholder='Message'
          />
        </Form.Group>
        <Button type='submit' value='Send'>
          Send
        </Button>
      </Form>
      <Footer />
    </div>
  );
};

export default Contact;
