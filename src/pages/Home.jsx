import { Link } from 'react-router-dom'
import lotus1 from './lotus1.png'
import spiral from './spiral.png'

export default function Home() {
    return (
        <div>
            <section className="hero container">
                <div className="hero-left">
                    <h2 className="hero-title">Yoga Tatva</h2>
                    <p className="hero-quote">“When every system Fails, Your conscience, clarity, and creativity Remain.”</p>
                    <div className="hero-buttons">
                        <div className="menu">
                            <Link to="/our-story" className="btn main-btn">Our Story</Link>
                            <div className="submenu" aria-hidden="true">
                                <Link to="/our-story#about" className="sub-btn">About</Link>
                                <Link to="/our-story#why" className="sub-btn">Why Yoga</Link>
                            </div>
                        </div>

                        <div className="menu">
                            <Link to="/practice" className="btn main-btn">Practice</Link>
                            <div className="submenu" aria-hidden="true">
                                <Link to="/practice#sessions" className="sub-btn">Sessions</Link>
                                <Link to="/practice#courses" className="sub-btn">Courses</Link>
                                <Link to="/practice#happenings" className="sub-btn">Happenings</Link>
                            </div>
                        </div>

                        <div className="menu">
                            <Link to="/contact" className="btn main-btn">Contact</Link>
                            <div className="submenu" aria-hidden="true">
                                <Link to="/contact#book" className="sub-btn">Book now</Link>
                                <Link to="/contact#faq" className="sub-btn">FAQ's</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <aside className="side-icons">
                    <div className="side-lines" aria-hidden="true">
                        <span className="line" />
                    </div>
                    <div style={{ height: 60 }} />
                    <img src={lotus1} alt="lotus" className="side-img" style={{ marginLeft: "0.5em" }} />
                    <div className="icon-circle" style={{ background: '#21311f' }}></div>
                    <div className="icon-circle" style={{ background: '#081924' }}></div>
                    <div className="icon-circle" style={{ background: '#792d1d' }}></div>
                    <img src={spiral} alt="spiral" className="side-img" />
                </aside>
            </section>
        </div>
    )
}
