import { useEffect, useState } from 'react';
import GoHomeButton from '../components/GoHomeButton';
import ServiceCard from '../components/ServiceCard';
import useSmoothScroll from '../hooks/useSmoothScroll';
import lake3 from './lake3.png';
import lotus2 from './lotus2.png';
import lotus3 from './lotus3.png';
;
export default function Practice() {
    useSmoothScroll();

    const [isMobile, setIsMobile] = useState(false); // Hook state for mobile detection
    const [isLaptop, setIsLaptop] = useState(false); // Hook state for laptop detection

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Set mobile state based on window width
            setIsLaptop(window.innerWidth >= 768); // Set laptop state
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='practice-page'>
            <section id="sessions" className="section container">
                <h2 style={{ fontSize: isMobile ? "5em" : "" }}>Sessions</h2>
                <div className="grid">
                    <div className="card" style={{ height: isMobile ? "600px" : "" }}>
                        <h3>Add headline here</h3>
                        <p className="muted">Sub-heading</p>
                    </div>
                </div>
                <GoHomeButton />
            </section>
            <img src={lake3} alt="decor" className="decor-mid-right" style={{ width: isMobile ? "20%" : "" }} />
            <img src={lotus2} alt="decor" className="decor-bottom-left" style={{ width: isMobile ? "20%" : "" }} />
            <img src={lotus3} alt="decor" className="decor-bottom-right" style={{ width: isMobile ? "55%" : "", marginTop: isMobile ? "-80em" : "", marginRight: isMobile ? "-9em" : "" }} />

            <section id="courses" className="section container" style={{ marginTop: isMobile ? "" : "15em" }}>
                <h2 style={{ fontSize: isMobile ? "5em" : "" }}>Courses</h2>

                <div className="courses-grid">
                    <div className="card course-hero" style={{ height: isMobile ? "100px" : "320px" }}></div>

                    <div className="card course-tall" style={{ height: isMobile ? "" : "650px" }}>
                        <h3>Course A</h3>
                    </div>

                    <div className="card course-small" style={{ height: isMobile ? "" : "350px" }}>
                        <h3>Course B</h3>
                    </div>

                    <div className="card course-medium" style={{ height: isMobile ? "" : "650px" }}>
                        <h3>Course C</h3>
                    </div>

                    <div className="card course-small2" style={{ height: isMobile ? "" : "400px" }}>
                        <h3>Course D</h3>
                    </div>
                </div>
                <GoHomeButton />
            </section>

            <section id="happenings" className="section container" style={{ marginTop: isMobile ? "" : "15em" }}>
                <h2 style={{ fontSize: isMobile ? "4em" : "" }}>Happenings</h2>
                <div className="grid">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
                <div style={{ marginTop: "19em" }}>
                    <GoHomeButton />
                </div>
            </section>
        </div >
    )
}
