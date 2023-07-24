'use client'
import { useState } from "react"

export default function Home() {
  const cursos = [
    "Programación Full Stack",
    "Inglés para Call Center",
    "Aire Acondicionado",
    "Java",
    "Mecánica de motos",
    "Asesor Comercial",
    "Conectividad y Redes",
    "Asesor Financiero",
    "Auxiliar de Almacén y Logística",
    "Mecánica de Motos",
    "Marketing Digital",
    "Visitador Médico",
    "Farmacología",
    "Asistente Administrativo",
    "Mantenimiento y reparación de celulares, tablets y computadoras",
    "Mantenimiento y reparación de aires acondicionados y electricidad básica",
  ];

  const [search, setSearch] = useState(cursos);

  const handleSearch = (event) => {
    let text = event.target.value.toLowerCase();
    const filtered = [];

    cursos.forEach((element) => {
      if (element.toLowerCase().includes(text)) {
        filtered.push(element);
      }
    });
    
    setSearch(filtered);
  };

  return (
    <main>
      <input type="text" onKeyUp={handleSearch} />
      <ul>
        {
          search.map((elemento, i) => (
            <li key={i}>{elemento}</li>
          ))
        }
      </ul>
    </main>
  )
}
