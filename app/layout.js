export const metadata = {
  title: "D’Pelitos Medellín | Veterinaria y Grooming",
  description: "Veterinaria, Grooming y Spa Canino y Felino en Medellín. Servicio a domicilio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
