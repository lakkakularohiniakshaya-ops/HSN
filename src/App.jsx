
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");

  const menu = [
    "Home",
    "Patients",
    "Doctors",
    "Appointments",
    "Billing"
  ];

  return (
    <div>
      <header>
        <h2>🏥 MediCare Hospital</h2>
        <nav>
          {menu.map((item) => (
            <button key={item} onClick={() => setPage(item)}>
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {page === "Home" && (
          <section className="hero">
            <h1>Welcome to MediCare Hospital</h1>
            <p>Your Health, Our Priority</p>
            <button onClick={() => setPage("Appointments")}>
              Book Appointment
            </button>
          </section>
        )}

        {page === "Patients" && (
          <section>
            <h1>Patient Management</h1>
            <p>Manage patient records and information.</p>
          </section>
        )}

        {page === "Doctors" && (
          <section>
            <h1>Our Doctors</h1>
            <div className="card">Dr. Ravi - Cardiologist</div>
            <div className="card">Dr. Priya - Dentist</div>
            <div className="card">Dr. Kumar - Physician</div>
          </section>
        )}

        {page === "Appointments" && (
          <section>
            <h1>Appointments</h1>
            <p>Appointment booking module</p>
          </section>
        )}

        {page === "Billing" && (
          <section>
            <h1>Billing Management</h1>
            <div className="card">
              Consultation Fee: ₹500
              <p>Medicine Charges: ₹1000</p>
              Total: ₹1500
            </div>
          </section>
        )}
      </main>

      <footer>
        © 2026 MediCare Hospital Management System
      </footer>
    </div>
  );
}

export default App;
