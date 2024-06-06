// ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: '',
        phone_number: '',
        content: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/contact-us/', formData);
            alert('Contact form submitted successfully');
            setFormData({
                full_name: '',
                email: '',
                subject: '',
                phone_number: '',
                content: ''
            });
        } catch (error) {
            console.error('Error submitting contact form:', error);
            alert('Failed to submit contact form. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
            <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
