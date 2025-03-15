import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [feedback, setFeedback] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFeedback(`Thank you, ${formData.name}! We have received your message.`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="section container py-5">
            <h2 className="text-center mb-4">Contact</h2>
            <p className="text-center mb-4">Feel free to reach out via the form below:</p>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea
                        id="message"
                        className="form-control"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Send</button>
            </form>
            {feedback && <p className="text-center text-success mt-3">{feedback}</p>}
        </section>
    );
};

export default ContactForm;
