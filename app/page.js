export default function Home() {
  const fadeUp = {
  animation: "fadeUp 0.8s ease-out forwards",
};
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#1f2937" }}>

<style>{`
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(22,163,74,0.6);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 12px rgba(22,163,74,0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes fadeCard {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #e9fbe9, #ffffff)",
        padding: "70px 20px",
        textAlign: "center"
      }}>
       <h1 style={{ color: "#166534", lineHeight: "1.2", ...fadeUp }}>
  <div style={{ fontSize: "42px", fontWeight: "700" }}>
    D’Pelitos Medellín
  </div>
  <div style={{ fontSize: "26px", fontWeight: "700" }}>
    Peluquería Canina y Felina / Veterinaria
  </div>
</h1>
        <p style={{ fontSize: "18px", margin: "20px 0" }}>
          Servicio a domicilio en el Área Metropolitana
        </p>

        <a href="https://wa.me/573019534080" target="_blank"
  style={{
    backgroundColor: "#16a34a",
    color: "white",
    padding: "16px 32px",
    borderRadius: "30px",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    animation: "pulse 2.5s infinite",
    display: "inline-block",
    transition: "transform 0.3s"
  }}
  onMouseOver={e => e.currentTarget.style.transform = "scale(1.08)"}
  onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
>
          Agendar por WhatsApp
        </a>
      </section>

      {/* GALERÍA */}
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
            { img: "/flyer-servicios.jpeg", title: "Servicios Veterinarios" },
            { img: "/flyer-grooming.jpeg", title: "Grooming Profesional" },
            { img: "/flyer-bano.jpeg", title: "Baño y Corte" },
            { img: "/flyer-chequeos.jpeg", title: "Chequeos Médicos" },
            { img: "/flyer-medicamentos.jpeg", title: "Medicamentos" },
          ].map((item, index) => (
           <div key={item.title} style={{
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  backgroundColor: "white",
  opacity: 0,
  animation: `fadeCard 0.6s ease-out forwards`,
  animationDelay: `${index * 0.15}s`
}}>
              <img src={item.img} alt={item.title} style={{ width: "100%" }} />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <strong>{item.title}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS LISTA */}
      <section style={{ backgroundColor: "#f0fdf4", padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", color: "#166534" }}>
          ¿Qué ofrecemos?
        </h2>

        <ul style={{
          maxWidth: "800px",
          margin: "30px auto",
          fontSize: "18px",
          lineHeight: "2"
        }}>
          <li>✔ Esterilización</li>
          <li>✔ Vacunación</li>
          <li>✔ Cirugía</li>
          <li>✔ Hospitalización</li>
          <li>✔ Grooming y Spa Canino / Felino</li>
          <li>✔ Medicamentos y accesorios</li>
          <li>✔ Atención a domicilio</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section style={{
        backgroundColor: "#166534",
        color: "white",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
          Agenda hoy mismo
        </h2>

        <p style={{ marginBottom: "30px" }}>
          📞 3019534080 <br />
          Medellín y Área Metropolitana
        </p>

        <a href="https://wa.me/573019534080" target="_blank"
          style={{
            backgroundColor: "white",
            color: "#166534",
            padding: "16px 34px",
            borderRadius: "30px",
            fontSize: "18px",
            fontWeight: "bold",
            textDecoration: "none"
          }}>
          Agendar por WhatsApp
        </a>
      </section>

    </main>
  );
}
