import { $ } from '../../core/utils/dom.js';

export const renderContact = () => {
    return `
        <div class="container contact-wrapper">
            <h2 class="section-title">Get In Touch</h2>
            <p class="contact-text">
                Have a project in mind or just want to say hi? Feel free to send me a message!
            </p>

            <form class="contact-form" onsubmit="event.preventDefault(); alert('Message sent! (Demo)');">
                <div class="form-group">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" id="name" class="form-input" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-input" placeholder="your@email.com" required>
                </div>
                <div class="form-group">
                    <label for="message" class="form-label">Message</label>
                    <textarea id="message" class="form-textarea" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%">Send Message</button>
            </form>

            <div class="contact-socials">
                <a href="#" class="social-link" title="LinkedIn">LinkedIn</a>
                <a href="#" class="social-link" title="GitHub">GitHub</a>
                <a href="#" class="social-link" title="Twitter">Twitter</a>
            </div>
        </div>
    `;
};

export const initContact = () => {
    const section = $('#contact');
    if (section) {
        section.innerHTML = renderContact();
    }
};
