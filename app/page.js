export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937" }}>
      
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #e9fbe9, #ffffff)",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", color: "#166534", marginBottom: "10px" }}>
          D’Pelitos Medellín
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Grooming • Pet Shop • Veterinaria  
          <br />
          Servicio a domicilio en el Área Metropolitana
        </p>

        <a
          href="https://wa.me/573009994019"
          target="_blank"
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            padding: "15px 30px",
            borderRadius: "30px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          Agendar por WhatsApp
        </a>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", color: "#166534" }}>
          Nuestros Servicios
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}>
          {[
            "Veterinaria",
            "Esterilización",
            "Vacunación",
            "Cirugía",
            "Grooming y Baño",
            "Corte e Higiene",
            "Chequeos médicos",
            "Medicamentos",
            "Spa canino y felino",
            "Servicio a domicilio"
          ].map((servicio) => (
            <div key={servicio} style={{
              border: "1px solid #e5e7eb",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
              background: "#ffffff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
            }}>
              <p style={{ fontSize: "18px", fontWeight: "600" }}>{servicio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section style={{
        backgroundColor: "#166534",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Contáctanos
        </h2>
        <p style={{ marginBottom: "10px" }}>
          📞 300 999 4019 • 300 681 1688
        </p>
        <p style={{ marginBottom: "30px" }}>
          Atención en Medellín y Área Metropolitana
        </p>

        <a
          href="https://wa.me/573009994019"
          target="_blank"
          style={{
            backgroundColor: "white",
            color: "#166534",
            padding: "15px 30px",
            borderRadius: "30px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          Agendar por WhatsApp
        </a>
      </section>

    </main>
  );
}
