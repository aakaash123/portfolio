import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        message: e.target.elements.message.value
      };

    emailjs.send('service_sixlr8d', 'template_xecm8pt', formData, 'R25-fuL0Uu-GZ3h3Z')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
