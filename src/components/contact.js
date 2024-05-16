import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'hello',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can implement your form submission logic here
        // For now, just show success message
        setSuccessMessage('Your message was sent successfully. Thank you!');

        emailjs.send('service_sixlr8d', 'template_xecm8pt', formData, 'R25-fuL0Uu-GZ3h3Z')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });

        setFormData({
            name: '',
            email: '',
            subject: 'hello',
            message: ''
        });
    };

    return (
    <div className="cont">
        <div id="contact-form">
            <div>
                <h1>Nice to Meet You!</h1>
                <h4>Have a question or just want to get in touch? Let's chat.</h4>
            </div>
            <p id="failure">{failureMessage}</p>
            <p id="success">{successMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        <span className="required">Name: *</span>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder="Your Name"
                            required="required"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        <span className="required">Email: *</span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Your Email"
                            required="required"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="subject">
                        <span>Subject: </span>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        >
                            <option value="hello">Product Price Question</option>
                            <option value="quote">Where are my dragons?!</option>
                            <option value="general">- Valar Morghulis -</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="message">
                        <span className="required">Message: *</span>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            placeholder="Please write your message here."
                            required="required"
                            onChange={handleChange}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <button name="submit" type="submit" id="submit">
                        SEND
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Contact;
