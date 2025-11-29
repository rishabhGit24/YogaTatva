import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'

const Home = React.lazy(() => import('./pages/Home'))
const OurStory = React.lazy(() => import('./pages/OurStory'))
const Practice = React.lazy(() => import('./pages/Practice'))
const Contact = React.lazy(() => import('./pages/Contact'))

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    )
}
