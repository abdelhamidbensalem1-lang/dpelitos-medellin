"use client";

export default function Home() {
  return (
    <main style={{ padding: 24, background: "#f0fdf4", color: "#14532d" }}>
      <h1 style={{ fontSize: 40, fontWeight: "bold" }}>D’Pelitos Medellín 🐾</h1>
      <p style={{ fontSize: 18, marginTop: 10 }}>
        Veterinaria · Grooming · Spa Canino y Felino
      </p>

      <section style={{ marginTop: 40 }}>
        <h2>Servicios Veterinarios</h2>
        <ul>
          <li>Consulta general</li>
          <li>Vacunación</li>
          <li>Esterilización</li>
          <li>Urgencias</li>
          <li>Cirugía y hospitalización</li>
        </ul>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Grooming & Spa</h2>
        <ul>
          <li>Baños medicados y antipulgas</li>
          <li>Corte higiénico y comercial</li>
          <li>Spa canino y felino</li>
        </ul>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Promociones</h2>
        <p><strong>Paquetes desde $50.000 COP</strong></p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Agenda tu cita</h2>
        <a
          href="https://wa.me/573009994019?text=Hola%20quiero%20agendar%20una%20cita%20en%20D’Pelitos"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: 10,
            padding: "12px 20px",
            background: "#16a34a",
            color: "white",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contactar por WhatsApp
        </a>
      </section>

      <footer style={{ marginTop: 60, fontSize: 14 }}>
        © {new Date().getFullYear()} D’Pelitos Medellín
      </footer>
    </main>
  );
}
