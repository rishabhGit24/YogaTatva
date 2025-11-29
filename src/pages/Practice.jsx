import { useEffect } from 'react';
import GoHomeButton from '../components/GoHomeButton';
import ServiceCard from '../components/ServiceCard';
import lake3 from './lake3.png';
import lotus2 from './lotus2.png';
import lotus3 from './lotus3.png';
export default function Practice() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className='practice-page'>
            <section id="sessions" className="section container">
                <h2>Sessions</h2>
                <div className="grid">
                    <div className="card">
                        <h3>Add headline here</h3>
                        <p className="muted">Sub-heading</p>
                    </div>
                </div>
                <GoHomeButton />
            </section>
            <img src={lake3} alt="decor" className="decor-mid-right" />
            <img src={lotus2} alt="decor" className="decor-bottom-left" />
            <img src={lotus3} alt="decor" className="decor-bottom-right" />

            <section id="courses" className="section container" style={{ marginTop: "15em" }}>
                <h2>Courses</h2>

                <div className="courses-grid">
                    <div className="card course-hero" style={{ height: '320px' }}></div>

                    <div className="card course-tall" style={{ height: '650px' }}>
                        <h3>Course A</h3>
                    </div>

                    <div className="card course-small" style={{ height: '350px' }}>
                        <h3>Course B</h3>
                    </div>

                    <div className="card course-medium" style={{ height: '650px' }}>
                        <h3>Course C</h3>
                    </div>

                    <div className="card course-small2" style={{ height: '400px' }}>
                        <h3>Course D</h3>
                    </div>
                </div>
                <GoHomeButton />
            </section>

            <section id="happenings" className="section container" style={{ marginTop: "15em" }}>
                <h2>Happenings</h2>
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
