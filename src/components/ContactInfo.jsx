function ContactInfo() {
    return (
        <address style={{
            fontStyle: 'normal',
            background: 'white',
            borderRadius: '15px',
            padding: '1.5rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            color: '#392714'
        }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Phone number</h3>
            <a
                href="tel:+12312345678"
                style={{ fontWeight: 'bold', color: '#392714', textDecoration: 'none' }}
            >
                +123 123 45 67
            </a>

            <hr aria-hidden="true" style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #eee' }} />

            <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Phone hours</h3>
            <dl style={{ margin: 0 }}>
                <dt style={dtStyle}>Monday to Friday</dt>
                <dd style={ddStyle}>09:00 – 20:00</dd>

                <dt style={dtStyle}>Saturday</dt>
                <dd style={ddStyle}>10:00 – 16:00</dd>

                <dt style={dtStyle}>Sunday</dt>
                <dd style={ddStyle}>10:00 – 14:00</dd>
            </dl>
        </address>
    );
}

const dtStyle = {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: '#555',
    marginTop: '0.4rem'
};

const ddStyle = {
    margin: '0 0 0.2rem 0',
    fontSize: '0.9rem',
    color: '#555'
};

export default ContactInfo;