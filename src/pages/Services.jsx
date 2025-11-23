import GoHomeButton from '../components/GoHomeButton'

export default function Services() {
  return (
    <div>
      <section className="section container">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cm sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <GoHomeButton />
      </section>

      <section className="section container">
        <h2>Why Yoga</h2>
        <ul>
          <li>Your Journey into Mind, Body and Emotional Balance</li>
          <li>Authentic Yoga practices</li>
          <li>Certified professional Yoga Teachers</li>
          <li>Research based Therapeutic solutions</li>
          <li>Fitness and Wellness</li>
        </ul>
        <GoHomeButton />
      </section>

      <section className="section container">
        <h2>Sessions</h2>
        <div className="grid">
          <div className="card">Add headline here<br /><small>Sub-heading</small></div>
        </div>
        <GoHomeButton />
      </section>

      <section className="section container">
        <h2>Courses</h2>
        <div className="grid">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
      <GoHomeButton />

      <section className="section container">
        <h2>Happenings</h2>
        <div className="grid">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
      <GoHomeButton />
    </div>
  )
}
