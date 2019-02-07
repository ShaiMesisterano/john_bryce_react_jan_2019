import React from 'react';

const Contact = () => (
    <div>
        <h1>Contact Us</h1>
        <form>
            <div className="form-group">
                <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
                <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
                <label for="comments">Enter your comments</label>
            </div>
            <div className="form-group">
                <textarea id="comments" cols="50" rows="20"></textarea>
            </div>
            <button className="btn btn-success">Send</button>
        </form>
    </div>
);

export default Contact;