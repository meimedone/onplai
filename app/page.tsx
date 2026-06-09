"use client";

import { useState } from "react";

const screens = [
  "Dashboard",
  "Buchungs-Inbox",
  "Terminkalender",
  "Digital Twin",
  "Verfügbarkeiten",
  "Check-In",
  "Sales Workspace",
  "Leads & Follow-Ups",
  "Event Copilot",
  "Administration",
];

const clinics = [
  "Klinik Schönwetter",
  "Klinik Südsee",
  "Psychiatrie Seeblick",
  "Privatklinik Waldruh",
  "Universitätsklinik Sonnenberg",
  "Reha Alpenblick",
];

const people = [
  "Anna Keller","Lukas Frei","Marco Weber","Nina Baumann","David Schmid",
  "Laura Huber","Simon Graf","Julia Meier","Pascal Vogel","Sandra Koch",
  "Tobias Roth","Melanie Kunz","Fabian Brunner","Carmen Schär","Daniel Zingg",
  "Patrick Moser","Sara Bieri","Kevin Nyffenegger","Nadine Berger","Stefan Fuchs",
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">ONplAI</div>
        <nav className="nav">
          {screens.map((s) => (
            <button
              key={s}
              className={active === s ? "active" : ""}
              onClick={() => setActive(s)}
            >
              {s}
            </button>
          ))}
        </nav>
      </aside>

      <div className="main">
        <header className="header">
          <div>
            <div className="event-title">IFAS 2026</div>
            <div className="event-sub">20.–22.10.2026 · Zürich · Aktives Event</div>
          </div>
          <div>Demo User</div>
        </header>

        <main className="content">
          {active === "Dashboard" && (
            <section>
              <div className="section-title">Dashboard</div>

              <div className="grid">
                <div className="card kpi" onClick={() => setActive("Terminkalender")}>
                  <div className="kpi-label">Termine heute</div>
                  <div className="kpi-value">24</div>
                </div>
                <div className="card kpi" onClick={() => setActive("Buchungs-Inbox")}>
                  <div className="kpi-label">Offene Buchungen</div>
                  <div className="kpi-value">7</div>
                </div>
                <div className="card kpi" onClick={() => setActive("Terminkalender")}>
                  <div className="kpi-label">Konflikte</div>
                  <div className="kpi-value">2</div>
                </div>
                <div className="card kpi" onClick={() => setActive("Check-In")}>
                  <div className="kpi-label">Check-Ins</div>
                  <div className="kpi-value">18</div>
                </div>
              </div>

              <div className="live-list">
                <div className="card">
                  <div className="section-title">Live läuft gerade</div>
                  <div className="item"><span className="badge green">läuft</span> Klinik Südsee · AP 2 · Mobile Demo</div>
                  <div className="item"><span className="badge blue">startet</span> Psychiatrie Seeblick · AP 4 · KIS Gesamt</div>
                  <div className="item"><span className="badge orange">wartet</span> Klinik Schönwetter · Check-In offen</div>
                </div>

                <div className="card">
                  <div className="section-title">Attention Center</div>
                  <div className="item"><span className="badge red">Konflikt</span> AP 3 doppelt belegt um 14:00</div>
                  <div className="item"><span className="badge orange">fehlend</span> Präsentator für Klinik Waldruh</div>
                  <div className="item"><span className="badge blue">Info</span> 3 neue Buchungsanfragen</div>
                </div>
              </div>
            </section>
          )}

          {active === "Buchungs-Inbox" && (
            <section>
              <div className="section-title">Buchungs-Inbox</div>
              <div className="live-list">
                <div className="card">
                  <h3>Eingang</h3>
                  {clinics.map((c) => (
                    <div className="item" key={c}>
                      <b>{c}</b><br />Interesse: KIS, Mobile · 3–6 Personen
                    </div>
                  ))}
                </div>
                <div className="card">
                  <h3>Verfügbare Personen</h3>
                  {people.map((p) => (
                    <div className="item" key={p}>{p} · Skill Match 80–96%</div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {active === "Terminkalender" && (
            <section>
              <div className="section-title">Terminkalender</div>
              <div className="card">
                <table className="table">
                  <thead><tr><th>Zeit</th><th>Kunde</th><th>Thema</th><th>AP</th><th>Team</th></tr></thead>
                  <tbody>
                    <tr><td>10:00</td><td>Klinik Südsee</td><td>Mobile</td><td>AP 2</td><td>Anna, Lukas</td></tr>
                    <tr><td>11:00</td><td>Psychiatrie Seeblick</td><td>KIS Gesamt</td><td>AP 4</td><td>Marco, Nina</td></tr>
                    <tr><td>14:00</td><td>Klinik Schönwetter</td><td>Medikation</td><td>AP 3</td><td>David, Laura</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {active === "Digital Twin" && (
            <section>
              <div className="section-title">Digital Twin</div>
              <div className="card">
                Standlayout IFAS 2026 · AP 1–8 · Live-Ansicht und Designer folgen hier.
              </div>
            </section>
          )}

          {active === "Verfügbarkeiten" && (
            <section>
              <div className="section-title">Verfügbarkeiten</div>
              <div className="card">
                Mitarbeiterkalender, Pausen, Krankheit und Sperren.
              </div>
            </section>
          )}

          {active === "Check-In" && (
            <section>
              <div className="section-title">Check-In</div>
              <div className="card">
                QR Check-In, Status ändern, Rückgängig-Funktion.
              </div>
            </section>
          )}

          {active === "Sales Workspace" && (
            <section>
              <div className="section-title">Sales Workspace</div>
              <div className="card">
                Gesprächserfassung, Audio, Bilder, Themen-Checkboxen, Follow-Up Datum und Export.
              </div>
            </section>
          )}

          {active === "Leads & Follow-Ups" && (
            <section>
              <div className="section-title">Leads & Follow-Ups</div>
              <div className="card">
                Follow-Up Übersicht und manueller Excel/CSV Export.
              </div>
            </section>
          )}

          {active === "Event Copilot" && (
            <section>
              <div className="section-title">Event Copilot</div>
              <div className="card">
                Chat-basierte Fragen zur Planung. In Release 1 regelbasiert, später KI optional.
              </div>
            </section>
          )}

          {active === "Administration" && (
            <section>
              <div className="section-title">Administration</div>
              <div className="card">
                Themen, Skills, Rollen, Gruppenberechtigungen, Arbeitsplätze und Event-Konfiguration.
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
