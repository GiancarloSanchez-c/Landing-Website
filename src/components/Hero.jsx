import React from 'react'
import SvgHero from "../Icons/SvgHero";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="hero">
        <div className="text-hero">
          <h1>Bienvenido a Website</h1>
          <p>Creando un mejor mundo para ti</p>
          <Link href="#contacto">
            <a>Contactame</a>
          </Link>
        </div>
        <div
          className="svg-hero"
          style={{ height: "200px", overflow: "hidden" }}
        >
          <SvgHero />
        </div>
      </header>
  )
}

export default Hero