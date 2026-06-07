import React, { useState } from 'react';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const bannerPoints = [
    "Features Nordic nRF52833 SoC with BLE 5.1 and RS485/422 communication",
    "Supports SD card storage, USB-C, and Li-ion battery management",
    "Compact design ideal for IoT, telemetry, and solar-powered systems",
  ];

  const features = [
    "High-performance Nordic nRF52833-QDAA MCU with BLE 5.1 and 2.4 GHz protocols",
    "RS485/422 connectivity via MAX13487EESA with automatic direction control",
    "Li-ion and solar power management with CN3791 MPPT charger support",
    "Flexible power input options: USB-C, VIN (2–16 V), or battery",
    "Expandable storage with microSD and W25Q16 SPI Flash for data logging",
    "Robust protection with ESD, TVS diodes, and reverse-polarity safeguards",
  ];

  const applications = [
    "Industrial RS485 Modbus communication with BLE monitoring",
    "Solar-powered IoT data logging and environmental monitoring",
    "Remote telemetry and condition monitoring systems",
    "Battery-operated BLE sensors or gateways",
    "Wireless configuration of RS485-based devices",
    "Energy and environmental monitoring platforms",
  ];

  const specifications = [
     { label: "Input", value:  "Li-ion battery (3.7V-4.2V)"},
    { label: "Microcontroller", value: "nRF52833-QDAA (ARM Cortex-M4F, 64 MHz, 512 KB Flash, 128 KB RAM)" },
  
    { label: "Interfaces", value: "RS485" },
    { label: "Memory", value: "16 Mbit W25Q16 SPI Flash and optional microSD card" },
    { label: "Battery Charger", value: "5V-12V DC Adapter" },
  
  
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 style={{ margin: 0, color: 'var(--primary)' }}>ModView</h2>
          <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>Dashboard</p>
        </div>
        
        <div className="sidebar-nav">
          <div 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }}
          >
            📊 Overview
          </div>
          <div 
            className={`nav-item ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => { setActiveTab('specs'); setSidebarOpen(false); }}
          >
            ⚙️ Hardware Specs
          </div>
          
          <div style={{ margin: '2rem 0 1rem 0', padding: '0 1rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>
            Resources
          </div>
          
          <a href="/assets/pdfs/modview.pdf" target="_blank" className="nav-item">
            📄 Datasheet PDF
          </a>
          <a href="mailto:Vikash.hardwareengineer@ihub-awadh.in" className="nav-item">
            ✉️ Contact Support
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <div className="dashboard-scroll">
          
          {activeTab === 'overview' && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Top Banner Image Widget */}
              <div className="widget" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.5))' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <h2 style={{ margin: 0 }}>ModView nRF52833 BLE + RS485 Data Logger</h2>
                </div>
                <img 
                  src="/assets/images/modview_nrf52833.png" 
                  alt="ModView Board" 
                  style={{ maxHeight: '350px', width: 'auto', borderRadius: '0.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} 
                />
              </div>

              {/* Three Column Dense Layout */}
              <div className="grid grid-cols-3-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                
                {/* Column 1: Highlights & Support */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="widget" style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                      Key Highlights
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {bannerPoints.map((point, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <div style={{ color: 'var(--accent)', marginTop: '0.1rem', fontSize: '1.25rem' }}>✓</div>
                          <div style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{point}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="widget" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.05))', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Need Assistance?</h3>
                    <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>Contact our hardware engineering team for support or custom integrations.</p>
                    <a href="mailto:Vikash.hardwareengineer@ihub-awadh.in" className="btn btn-primary" style={{ width: '100%' }}>Enquire</a>
                  </div>
                </div>

                {/* Column 2: Full Features */}
                <div className="widget">
                  <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    Hardware Features
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {features.map((feature, idx) => (
                      <li key={idx} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Applications */}
                <div className="widget">
                  <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    Supported Applications
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {applications.map((app, idx) => (
                      <li key={idx} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="animate-fade-in">
              <h2 style={{ marginBottom: '2rem' }}>Hardware Specifications</h2>
              
              <div className="widget" style={{ padding: 0, overflow: 'hidden' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Specification Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((spec, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: 500, color: 'var(--text-primary)', width: '25%' }}>{spec.label}</td>
                        <td style={{ color: 'var(--text-secondary)' }}>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;
