import './ContactForm.css';

const ContactForm = () => {
    return (
        <section id="contact" className="section">
            <h2>Contact</h2>
            <p>Feel free to reach out via the form below:</p>
            <form id="contactForm">
                <input type="text" id="name" placeholder="Your Name" required />
                <input type="email" id="email" placeholder="Your Email" required />
                <textarea id="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
            <p id="formFeedback"></p>
        </section>
    );
}

export default ContactForm;