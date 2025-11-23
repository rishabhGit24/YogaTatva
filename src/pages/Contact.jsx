import GoHomeButton from '../components/GoHomeButton'
import Booking from './Booking'
import clock from './clock.png'
import lake1 from './lake1.png'
import lotus2 from './lotus2.png'
import lotus3 from './lotus3.png'
import lotus4 from './lotus4.png'

export default function Contact() {
    return (
        <div className='contact-page'>
            {/* Promo card placed above the booking form */}
            <img src={lake1} alt="decor" className="decor-top-right" />
            <img src={lotus2} alt="decor" className="decor-up-mid-right" />
            <img src={lotus3} alt="decor" className="decor-down-mid-right" />
            <img src={lotus4} alt="decor" className="decor-bottom-right " />
            <div id="book" className="section container" style={{ marginLeft: "18em" }}>
                <h2>Book now</h2>
            </div>
            <section className="section container">
                <div className="promo-card card">
                    <img src={clock} alt="decor" style={{ width: "200px" }} />
                    <h3>Drop in classes</h3>
                    <p className="muted subheading">Sub-heading</p>
                    <p className="promo-copy">consectetuer adipiscing elit. Aenean . Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean . Lorem ipsum dolor sit amet, co</p>
                    <div style={{ textAlign: 'center', marginTop: 18 }}>
                    </div>
                </div>
            </section>
            {/* Booking form (reuses existing Booking page/component) */}
            <div id="book" style={{ marginTop: "-4em" }}>
                <Booking />
            </div>

            {/* FAQ section below booking - collapsible items */}
            <section id="faq" className="section container" style={{ marginTop: "10em" }}>
                <h2>FAQ's</h2>
                <div className="faq-list">
                    <details>
                        <summary>How do I book a session?</summary>
                        <p>Use the booking form above or contact us and we'll help schedule and tailor a session to your needs.</p>
                    </details>

                    <details>
                        <summary>What should I bring?</summary>
                        <p>Comfortable clothing, water, and a yoga mat if you have one — we can provide a mat on request.</p>
                    </details>

                    <details>
                        <summary>Can I cancel?</summary>
                        <p>Yes — please refer to our cancellation policy or contact us directly; cancellations within 24 hours may incur a fee.</p>
                    </details>

                    <details>
                        <summary>Do you provide equipment?</summary>
                        <p>We can provide basic equipment such as mats and bolsters for group sessions — please let us know in advance.</p>
                    </details>

                    <details>
                        <summary>Are sessions suitable for beginners?</summary>
                        <p>Absolutely. We tailor sessions for all levels and can offer gentler options for beginners or those returning from injury.</p>
                    </details>

                    <details>
                        <summary>Do you offer corporate packages?</summary>
                        <p>Yes — we design corporate wellness packages for teams, including on-site and remote sessions. Contact us for a proposal.</p>
                    </details>
                </div>
                <GoHomeButton />
            </section>
        </div>
    )
}
