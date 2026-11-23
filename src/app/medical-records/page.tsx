
const medicalRecords = [
  {
    title: "General Checkup",
    hospital: "Demo Medical Center",
    date: "November 18, 2026",
    category: "Consultation",
    icon: "🩺",
  },
  {
    title: "Blood Test",
    hospital: "Demo Medical Center",
    date: "November 15, 2026",
    category: "Laboratory",
    icon: "🧪",
  },
  {
    title: "Prescription",
    hospital: "Demo Medical Center",
    date: "November 10, 2026",
    category: "Medication",
    icon: "💊",
  },
];

export default function MedicalRecordsPage() {
  return (
    <main className="records-page">
      <div className="records-header">
        <div>
          <p className="breadcrumb">Patient Portal / Medical Records</p>
          <h1>Medical Records</h1>
          <p>View and manage your medical history in one place.</p>
        </div>

        <button className="upload-button">
          + Upload Document
        </button>
      </div>

      <section className="records-summary">
        <div className="record-summary-card">
          <span>Total Records</span>
          <h2>03</h2>
        </div>

        <div className="record-summary-card">
          <span>Consultations</span>
          <h2>01</h2>
        </div>

        <div className="record-summary-card">
          <span>Laboratory</span>
          <h2>01</h2>
        </div>

        <div className="record-summary-card">
          <span>Medications</span>
          <h2>01</h2>
        </div>
      </section>

      <section className="records-container">
        <div className="records-toolbar">
          <div>
            <h2>All Medical Documents</h2>
            <p>Your stored medical information</p>
          </div>

          <input
            type="search"
            placeholder="Search medical records..."
            className="records-search"
          />
        </div>

        <div className="records-table">
          <div className="records-table-header">
            <span>DOCUMENT</span>
            <span>HEALTH FACILITY</span>
            <span>DATE</span>
            <span>CATEGORY</span>
          </div>

          {medicalRecords.map((record) => (
            <div className="records-table-row" key={record.title}>
              <div className="document-name">
                <span className="document-icon">{record.icon}</span>
                <strong>{record.title}</strong>
              </div>

              <span>{record.hospital}</span>
              <span>{record.date}</span>

              <span className="category-tag">
                {record.category}
              </span>
            </div>
          ))}
        </div>

        <p className="records-notice">
          Demonstration records only. No real patient information is stored.
        </p>
      </section>
    </main>
  );
}
