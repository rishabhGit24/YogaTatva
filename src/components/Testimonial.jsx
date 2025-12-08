
export default function Testimonial() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div className="card">
                <p>“Yoga Tattva helped improve our team's focus and wellbeing. Simple, clear and effective.”</p>
                <p style={{ textAlign: 'right', fontWeight: 600 }}>— HR, Acme Corp</p>
            </div>
            <div className="card">
                <p>“Excellent sessions tailored to our busy employees.”</p>
                <p style={{ textAlign: 'right', fontWeight: 600 }}>— People Ops</p>
            </div>
        </div>
    )
}
