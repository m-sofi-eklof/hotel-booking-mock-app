import { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

function Help() {
    const isMobile = useIsMobile();

    return (
        <div style={{
            maxWidth: '900px',
            margin: '1rem auto',
            padding: isMobile ? '1rem' : '2rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '3rem'
        }}>

            {/*phone contact info*/}
            <div style={{ flex: 1, width:isMobile?'90%':'45%'}}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Contact us</h2>
                <p style={{ color: '#555', marginBottom: '2rem' }}>
                    Wish to reach us directly? Our staff on site are happy to help!
                </p>
                <ContactInfo/>
            </div>

            {/*form*/}
            <div style={{ flex: 1, width:isMobile?'90%':'45%' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Send a message</h2>
                <p style={{ color: '#555', marginBottom: '2rem' }}>
                    Submit any questions you may have in this form, and our team will get back to you shortly.
                </p>
                <ContactForm/>
            </div>
        </div>
    );
}

export default Help;