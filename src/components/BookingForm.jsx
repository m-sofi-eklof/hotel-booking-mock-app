const today = new Date().toISOString().split('T')[0];

return (
    <div style={{
        maxWidth: '600px',
        margin: '4rem auto',
        padding: isMobile ? '1rem' : '2rem',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
    }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#333' }}>Book your stay</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/*room type*/}
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                <legend style={{ ...labelStyle, marginBottom: '1rem' }}>Room & guests</legend>

                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="roomType" style={labelStyle}>Room type</label>
                    <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} required style={inputStyle}>
                        <option value="" disabled>Select a room...</option>
                        <option value="Standard">Standard</option>
                        <option value="Deluxe">Deluxe</option>
                        <option value="Suite">Suite</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="guests" style={labelStyle}>Guests</label>
                    <select id="guests" name="guests" value={formData.guests} onChange={handleChange} style={inputStyle}>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                    </select>
                </div>
            </fieldset>

            {/*name*/}
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                <legend style={{ ...labelStyle, marginBottom: '1rem' }}>Personal details</legend>

                <div style={{ display: 'flex', gap: '1rem', flexDirection: isMobile ? 'column' : 'row' }}>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="firstName" style={labelStyle}>First name</label>
                        <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required style={inputStyle} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="lastName" style={labelStyle}>Last name</label>
                        <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required style={inputStyle} />
                    </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                </div>
            </fieldset>

            {/*dates*/}
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                <legend style={{ ...labelStyle, marginBottom: '1rem' }}>Stay dates</legend>

                <div style={{ display: 'flex', gap: '1rem', flexDirection: isMobile ? 'column' : 'row' }}>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="checkIn" style={labelStyle}>Check-in</label>
                        <input id="checkIn" type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required min={today} style={inputStyle} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="checkOut" style={labelStyle}>Check-out</label>
                        <input id="checkOut" type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required min={formData.checkIn || today} style={inputStyle} />
                    </div>
                </div>
            </fieldset>

            <button
                type="submit"
                style={{
                    marginTop: '1rem',
                    padding: '0.9rem',
                    background: '#100b31',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    cursor: 'pointer'
                }}
            >
                Book
            </button>
        </form>
    </div>
);