function ContactInfo() {
    return (
        <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '1.5rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            color: '#392714'
        }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Phone number</h3>
            <p style={{ margin: 0, fontWeight: 'bold' }}>+123 123 45 67</p>

            <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #eee' }} />

            <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Phone hours</h3>
            <p style={{ margin: '0.2rem 0', color: '#555', fontSize: '0.9rem' }}>Monday to Friday: 09:00 - 20:00</p>
            <p style={{ margin: '0.2rem 0', color: '#555', fontSize: '0.9rem' }}>Saturday: 10:00 - 16:00</p>
            <p style={{ margin: '0.2rem 0', color: '#555', fontSize: '0.9rem' }}>Sunday: 10:00 - 14:00</p>
        </div>
    );
}

export default ContactInfo;