import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Practice from './pages/Practice'

export default function App() {
    return (
        <Routes>
            {/* Standalone landing route */}
            <Route path="/" element={<Home />} />

            {/* Other site sections use the Layout (Footer/shared UI) */}
            <Route element={<Layout />}>
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}
