import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
    return (
        <header className="navbar container">
            <div className="logo">
                <Logo />
                <h1>Yoga Tattva</h1>
            </div>
            <nav className="navlinks" aria-label="Primary">
                <Link to="/our-story">Our Story</Link>
                <Link to="/practice">Practice</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}
