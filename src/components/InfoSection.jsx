import React from "react";
import SvgSection from "../Icons/SvgSection";
import Link from "next/link";

const InfoSection = () => {
  return (
    <>
      <section class="wave-contenedor website">
        <img src="/static/ilustracion1.svg" alt="svg" layout="fill" />
        <div class="contenedor-text-main">
          <h2 class="titulo left">Title of section</h2>
          <p class="parrafo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nihil
            recusandae repudiandae velit asperiores corrupti fuga, dolorem
            ratione obcaecati, in animi libero autem a iure quibusdam magnam
            est? Hic, ipsum.
          </p>
          <a href="" class="cta">
            Learn more
          </a>
        </div>
      </section>

      <section class="info">
        <div class="contenedor">
          <h2 class="titulo lef">Juntos podemos apoyarnos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>

      <section class="cards contenedor">
        <h2 class="titulo">Our services</h2>
        <div class="content-cards">
          <article class="card">
            <h3>Title Card</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.{" "}
            </p>
            <a href="" class="cta">
              Learn more
            </a>
          </article>
          <article class="card">
            <h3>Title Card</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.{" "}
            </p>
            <a href="" class="cta">
              Learn more
            </a>
          </article>
          <article class="card">
            <h3>Title Card</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.{" "}
            </p>
            <Link href="" class="cta">
              <a>Learn more</a>
            </Link>
          </article>
        </div>
      </section>

      <section class="galeria">
        <div class="contenedor">
          <h2 class="titulo">Our work</h2>
          <article class="galeria-cont">
            <img src="/static/uno.jpg" alt="" layout="fill" />
            <img src="/static/dos.jpg" alt="" layout="fill" />
            <img src="/static/tres.jpg" alt="" layout="fill" />
            <img src="/static/cuatro.jpg" alt="" layout="fill" />
            <img src="/static/cinco.jpg" alt="" layout="fill" />
            <img src="/static/seis.jpg" alt="" layout="fill" />
          </article>
        </div>
      </section>

      <section class="info-last">
        <div class="contenedor last-section">
          <div class="contenedor-text-main">
            <h2 class="titulo left">Title of section</h2>
            <p class="parrafo">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              reprehenderit nostrum expedita quasi odio architecto laudantium
              sunt nemo dicta atque?
            </p>
            <a href="" class="cta">
              Learn more
            </a>
          </div>
          <img src="/static/ilustracion.svg" alt="" layout="fill" />
        </div>

        <div
          className="svg-wave"
          style={{ height: "150px", overflow: "hidden" }}
        >
          <SvgSection />
        </div>
      </section>
    </>
  );
};

export default InfoSection;
