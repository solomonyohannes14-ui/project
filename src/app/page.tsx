
const navigation = [
  { icon: "⌂", label: "Dashboard", active: true },
  { icon: "▤", label: "Medical Records" },
  { icon: "♡", label: "Appointments" },
  { icon: "▣", label: "Insurance" },
  { icon: "♙", label: "My Profile" },
];

const records = [
  { title: "General Checkup", hospital: "Demo Medical Center", date: "Nov 18, 2026", type: "Consultation" },
  { title: "Blood Test", hospital: "Demo Medical Center", date: "Nov 15, 2026", type: "Laboratory" },
  { title: "Prescription", hospital: "Demo Medical Center", date: "Nov 10, 2026", type: "Medication" },
];

export default function HomePage() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">M</div>
          <span>MediBridge</span>
        </div>

        <p className="nav-heading">MENU</p>

        <nav className="navigation">
          {navigation.map((item) => (
            <a
              href="#"
              key={item.label}
              className={`nav-link ${item.active ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <strong>Need help?</strong>
            <p>We&apos;re here to help you manage your health information.</p>
            <a href="mailto:support@medibridge.example">Contact support</a>
          </div>
          <p className="sidebar-footer">MediBridge © 2026</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Patient Portal / Dashboard</p>
            <h1>Dashboard</h1>
          </div>
          <div className="user-profile">
            <div className="avatar">P</div>
            <div>
              <strong>Demo Patient</strong>
              <span>Patient account</span>
            </div>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <p className="eyebrow">YOUR HEALTH, CONNECTED</p>
            <h2>Welcome to MediBridge</h2>
            <p>Manage your medical information in one secure place.</p>
          </div>
          <div className="welcome-icon">✚</div>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-icon teal">▤</div>
            <p>Medical Records</p>
            <h3>03</h3>
            <span>Demo records</span>
          </article>

          <article className="stat-card">
            <div className="stat-icon blue">♡</div>
            <p>Appointments</p>
            <h3>01</h3>
            <span>Demo appointment</span>
          </article>

          <article className="stat-card">
            <div className="stat-icon purple">▣</div>
            <p>Insurance Policies</p>
            <h3>01</h3>
            <span>Demo policy</span>
          </article>

          <article className="stat-card">
            <div className="stat-icon orange">♧</div>
            <p>Shared Records</p>
            <h3>00</h3>
            <span>No active shares</span>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel records-panel">
            <div className="panel-heading">
              <div>
                <h3>Recent Medical Records</h3>
                <p>Your latest health documents</p>
              </div>
              <a href="#">View all →</a>
            </div>

            <div className="records-list">
              {records.map((record) => (
                <div className="record-item" key={record.title}>
                  <div className="record-icon">▤</div>
                  <div className="record-info">
                    <strong>{record.title}</strong>
                    <span>{record.hospital} · {record.date}</span>
                  </div>
                  <span className="record-type">{record.type}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel insurance-panel">
            <div className="panel-heading">
              <div>
                <h3>Insurance Overview</h3>
                <p>Policy information</p>
              </div>
              <span className="status-demo">DEMO</span>
            </div>

            <div className="insurance-icon">▣</div>
            <h4>Sample Health Policy</h4>
            <p className="policy-number">Policy number: DEMO-0001</p>

            <div className="insurance-details">
              <div>
                <span>Provider</span>
                <strong>Demo Insurance</strong>
              </div>
              <div>
                <span>Expiry date</span>
                <strong>Not verified</strong>
              </div>
            </div>

            <p className="demo-note">
              Demonstration information only. No real insurance coverage has been verified.
            </p>
          </article>
        </section>

        <footer className="dashboard-footer">
          MediBridge — Your health information, connected.
          <span>Demonstration interface · Not connected to real patient data</span>
        </footer>
      </main>
    </div>
  );
}
