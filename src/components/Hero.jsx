import useIsMobile from '../hooks/useIsMobile';
import hotelView from '/hotel-view.jpg';

function Hero() {
    const isMobile = useIsMobile();

    return (
        <header className="hero" style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div
                role="img"
                aria-label="View of hotel, pool and sky"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: isMobile ? '96vh' : '65vh',
                    backgroundImage: `url(${hotelView})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: isMobile ? 'flex-start' : 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                {/*gradient to bg color*/}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: isMobile ? '150px' : '100px',
                    background: 'linear-gradient(to bottom, transparent, #bdac92)',
                    pointerEvents: 'none',
                    zIndex: 1
                }} aria-hidden="true" />

                <h1 style={{
                    position: 'relative',
                    zIndex: 2,
                    fontSize: isMobile ? '2.5rem' : '4rem',
                    margin: 0,
                    fontWeight: 'inherit',
                    color: '#2c200e',
                    marginTop: isMobile ? '75px' : '-100px',
                    textShadow: '0 1px 8px rgba(255,255,255,0.4)'
                }}>
                    Your horizon, defined
                </h1>
            </div>
        </header>
    );
}

export default Hero;