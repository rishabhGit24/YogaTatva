import { useEffect, useState } from 'react';
import GoHomeButton from '../components/GoHomeButton';

export default function Booking({ isMobile: isMobileProp }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Drop in classes', message: '' })
  const [errors, setErrors] = useState({})

  const [isMobile, setIsMobile] = useState(false); // Hook state for mobile detection

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set mobile state based on window width
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use prop if provided, otherwise use state
  const isMobileView = isMobileProp !== undefined ? isMobileProp : isMobile;
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function validate() {
    const errs = {}
    if (!form.name) errs.name = 'Required'
    if (!form.email) errs.email = 'Required'
    if (!form.phone) errs.phone = 'Required'
    return errs
  }
  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      alert('Form submitted (mock) — we would send this to backend')
    }
  }

  return (
    <>
      <div id="book" className="section container">
        <div className="form-card" style={{ width: isMobileView ? "100%" : "auto", maxWidth: isMobileView ? "100%" : "600px" }}>
          <h3 style={{ textAlign: 'center' }}>Get in touch!</h3>
          <form onSubmit={handleSubmit} noValidate>
            <input className="input" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            <input className="input" name="email" placeholder="email" value={form.email} onChange={handleChange} />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            <input className="input" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <textarea className="input" name="message" placeholder="Message" value={form.message} onChange={handleChange} style={{ height: 120 }} />
            <div style={{ textAlign: 'center' }}>
              <button className="btn submit" type="submit">Send</button>
            </div>
          </form>
        </div>
        <div style={{ marginLeft: isMobileView ? "0" : "3em", textAlign: isMobileView ? "center" : "left" }}><GoHomeButton /></div>
      </div>
    </>
  )
}
