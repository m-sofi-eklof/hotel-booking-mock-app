function Confirmation({ formData, bookingId }) {
    return (
        <section
            role="alert"
            aria-label="Booking confirmation"
            style={{
                maxWidth: '600px',
                margin: '4rem auto',
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                textAlign: 'center',
                color: '#392714'
            }}
        >
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                Booking confirmed
            </h2>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
                Booking number: <strong aria-live="polite">{bookingId}</strong>
            </p>

            <dl style={{
                background: '#f9f5ee',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'left'
            }}>
                <dt style={dtStyle}>Room</dt>
                <dd style={ddStyle}>{formData.roomType}</dd>

                <dt style={dtStyle}>Name</dt>
                <dd style={ddStyle}>{formData.firstName} {formData.lastName}</dd>

                <dt style={dtStyle}>Email</dt>
                <dd style={ddStyle}>{formData.email}</dd>

                <dt style={dtStyle}>Check-in</dt>
                <dd style={ddStyle}>{formData.checkIn}</dd>

                <dt style={dtStyle}>Check-out</dt>
                <dd style={ddStyle}>{formData.checkOut}</dd>

                <dt style={dtStyle}>Guests</dt>
                <dd style={ddStyle}>{formData.guests}</dd>
            </dl>
        </section>
    );
}

const dtStyle = {
    fontWeight: 'bold',
    marginTop: '0.75rem',
    fontSize: '0.85rem',
    color: '#555'
};

const ddStyle = {
    margin: '0 0 0.25rem 0',
    fontSize: '1rem',
    color: '#392714'
};

export default Confirmation;