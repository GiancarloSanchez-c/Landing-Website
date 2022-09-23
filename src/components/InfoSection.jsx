import React from "react";
import SvgSection from "../Icons/SvgSection";
import Link from "next/link";

const InfoSection = () => {
  return (
    <>
      <section className="wave-contenedor website">
        <img src="/static/ilustracion1.svg" alt="svg" layout="fill" />
        <div className="contenedor-text-main">
          <h2 className="titulo left">Title of section</h2>
          <p className="parrafo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nihil
            recusandae repudiandae velit asperiores corrupti fuga, dolorem
            ratione obcaecati, in animi libero autem a iure quibusdam magnam
            est? Hic, ipsum.
          </p>
          <a href="" className="cta">
            Learn more
          </a>
        </div>
      </section>

      <section className="info">
        <div className="contenedor">
          <h2 className="titulo lef">Juntos podemos apoyarnos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>

      <section className="cards contenedor">
        <h2 className="titulo">Our services</h2>
        <div className="content-cards">
          <article className="card">
            <h3>Title Card</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.{" "}
            </p>
            <Link href="">
              <a className="cta">Learn more</a>
            </Link>
          </article>
          <article className="card">
            <h3>Title Card</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.{" "}
            </p>
            <Link href="">
              <a className="cta">Learn more</a>
            </Link>
          </article>
          <article className="card">
            <h3>Title Card</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.
              Lorem ipsum dolor sit amet, consectetur adip elit.Lorem ipsum
              dolor sit amet.{" "}
            </p>
            <Link href="">
              <a className="cta">Learn more</a>
            </Link>
          </article>
        </div>
      </section>

      <section className="galeria">
        <div className="contenedor">
          <h2 className="titulo">Our work</h2>
          <article className="galeria-cont">
            <img src="/static/uno.jpg" alt="" layout="fill" />
            <img src="/static/dos.jpg" alt="" layout="fill" />
            <img src="/static/tres.jpg" alt="" layout="fill" />
            <img src="/static/cuatro.jpg" alt="" layout="fill" />
            <img src="/static/cinco.jpg" alt="" layout="fill" />
            <img src="/static/seis.jpg" alt="" layout="fill" />
          </article>
        </div>
      </section>

      <section className="info-last">
        <div className="contenedor last-section">
          <div className="contenedor-text-main">
            <h2 className="titulo left">Title of section</h2>
            <p className="parrafo">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              reprehenderit nostrum expedita quasi odio architecto laudantium
              sunt nemo dicta atque?
            </p>
            <a href="" className="cta">
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
