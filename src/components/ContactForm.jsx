import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({ email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div
                role="alert"
                style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '2rem',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                    marginTop: '4rem',
                    color: '#392714'
                }}
            >
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message sent!</h3>
                <p style={{ color: '#555' }}>We will get back to you within 1-2 business days.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{
            background: 'white',
            borderRadius: '15px',
            padding: '1.5rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />
            </div>

            <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                />
            </div>

            <button
                type="submit"
                onFocus={e => e.target.style.outline = '3px solid #17048e'}
                onBlur={e => e.target.style.outline = 'none'}
                style={{
                    padding: '0.9rem',
                    background: '#100b31',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                }}
            >
                Send
            </button>
        </form>
    );
}

const labelStyle = {
    display: 'block',
    marginBottom: '0.25rem',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    color: '#333'
};

const inputStyle = {
    width: '100%',
    padding: '0.6rem 0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '0.9rem',
    boxSizing: 'border-box'
};

export default ContactForm;