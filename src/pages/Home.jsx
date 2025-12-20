import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import lotus1 from './lotus1.png';
import spiral from './spiral.png';

export default function Home() {

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
        <div className="home-page" style={{ background: "linear-gradient(180deg, #ffffff 1%, #f9dfbd 99%)" }}>
            <section className="hero container" style={{ width: isMobile ? "50em" : "", marginTop: isMobile ? "-3em" : "" }}>
                <div className="hero-left" style={{ width: isMobile ? "20em" : "", marginLeft: isMobile ? "-5em" : "" }}>
                    <h2 className="hero-title" style={{ fontSize: isMobile ? "3.5em" : "" }}>Yoga Tattva</h2>
                    <p className="hero-quote" style={{ fontSize: isMobile ? "1.3em" : "", maxWidth: isMobile ? "80%" : "", marginTop: isMobile ? "-1em" : "", marginLeft: isMobile ? "-1.6em" : "", wordSpacing: isMobile ? "0.55em" : "0.3em" }}>
                        <span className="word-animate" style={{ "--delay": "0s" }}>"When</span>{"   "}
                        <span className="word-animate" style={{ "--delay": "0.25s" }}>every</span>{"   "}
                        <span className="word-animate" style={{ "--delay": "0.45s" }}>system</span>{"   "}
                        <span className="word-animate" style={{ "--delay": "0.65s" }}>Fails,</span>{"   "}
                        <span className="word-animate" style={{ "--delay": "0.85s" }}>Your</span>{"   "}
                        <span className="word-animate" style={{ "--delay": "1.05s" }}>conscience,</span>{"   "}
                        <span className="word-animate" style={{ "--delay": "1.3s" }}>clarity,</span>{"   "}
                        <span className="word-animate" style={{ "--delay": "1.55s" }}>and</span>{"   "}
                        <span className="word-animate" style={{ "--delay": "1.8s" }}>creativity</span>{"   "}
                        <span className="word-animate" style={{ "--delay": "2.05s" }}>Remain."</span>
                    </p>
                    <div className="hero-buttons" style={{ gap: isMobile ? "1.3em" : "", display: isMobile ? "flex" : "", flexDirection: isMobile ? "column" : "", alignContent: "initial", marginTop: isMobile ? "-3em" : "", marginLeft: isMobile ? "-7em" : "" }}>
                        <div className="menu" style={{ display: isMobile ? "flex" : "", flexDirection: isMobile ? "column" : "" }}>
                            <Link to="/our-story" className="btn main-btn">Our Story</Link>
                            <div className="submenu" aria-hidden="true" style={{ display: isMobile ? "flex" : "" }}>
                                <Link to="/our-story#about" className="sub-btn">About</Link>
                                <Link to="/our-story#why" className="sub-btn">Why Yoga</Link>
                            </div>
                        </div>

                        <div className="menu" style={{ display: isMobile ? "flex" : "", flexDirection: isMobile ? "column" : "" }}>
                            <Link to="/practice" className="btn main-btn">Practice</Link>
                            <div className="submenu" aria-hidden="true" style={{ display: isMobile ? "flex" : "" }}>
                                <Link to="/practice#sessions" className="sub-btn">Sessions</Link>
                                <Link to="/practice#courses" className="sub-btn">Courses</Link>
                                <Link to="/practice#happenings" className="sub-btn">Happenings</Link>
                            </div>
                        </div>

                        <div className="menu" style={{ display: isMobile ? "flex" : "", flexDirection: isMobile ? "column" : "" }}>
                            <Link to="/contact" className="btn main-btn">Contact</Link>
                            <div className="submenu" aria-hidden="true" style={{ display: isMobile ? "flex" : "" }}>
                                <Link to="/contact#book" className="sub-btn">Book now</Link>
                                <Link to="/contact#faq" className="sub-btn">FAQ's</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="side-icons" style={{ marginLeft: isMobile ? "-20em" : "", marginTop: isMobile ? "4em" : "" }}>
                    <div className="side-lines" aria-hidden="true" style={{ height: "100%" }}>
                        <span className="line" />
                    </div>
                    <div style={{ height: 60 }} />
                    <img src={lotus1} alt="lotus" className="side-img" style={{ marginLeft: "0.5em", width: isMobile ? "65%" : "" }} />
                    <div className="icon-circle" style={{ background: '#21311f' }}></div>
                    <div className="icon-circle" style={{ background: '#081924' }}></div>
                    <div className="icon-circle" style={{ background: '#792d1d' }}></div>
                    <img src={spiral} alt="spiral" className="side-img" style={{ width: isMobile ? "60%" : "" }} />
                </aside>
            </section>
        </div>
    )
}
