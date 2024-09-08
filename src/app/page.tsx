import Acciones from '@/components/Acciones'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import React from 'react'

export default function Page() {
  return (
    <div className="scroll-container snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Sección de Header con margen cero para evitar espacio en blanco */}
      <Header />

      {/* Otras secciones */}
      <section className="snap-start h-screen">
        <Hero />
      </section>
      <section className="snap-start h-screen">
        <Servicios />
      </section>
      <section className="snap-start h-screen">
        <Acciones />
      </section>
    </div>
  )
}
