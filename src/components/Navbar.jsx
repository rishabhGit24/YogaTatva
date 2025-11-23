import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
    return (
        <header className="navbar container">
            <div className="logo">
                <Logo />
                <h1>Yoga Tatva</h1>
            </div>
            <nav className="navlinks" aria-label="Primary">
                <Link to="/">Our Story</Link>
                <Link to="/services">Sessions</Link>
                <Link to="/booking">Book now</Link>
            </nav>
        </header>
    )
}
