import Hero from '../components/Hero';
import RoomCard from '../components/RoomCard';
import useIsMobile from "../hooks/useIsMobile";

function Home() {
    const isMobile = useIsMobile();

    const containerStyle = {
        width: isMobile ? '95vw' : '85vw',
        margin: '0 auto',
        marginTop: isMobile ? '-275px' : '-125px',
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
    };

    return (
        <main style={{ paddingBottom: isMobile ? '30px' : '0px' }}>
            <Hero />
            <section aria-label="Available rooms" style={containerStyle}>
                <h2 style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden',
                    clip: 'rect(0,0,0,0)',
                    whiteSpace: 'nowrap'
                }}>
                    Available rooms
                </h2>
                <RoomCard roomType="Standard" imageIndex={0} />
                <RoomCard roomType="Deluxe" imageIndex={1} />
                <RoomCard roomType="Suite" imageIndex={2} />
            </section>
        </main>
    );
}

export default Home;