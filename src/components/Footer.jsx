import React from "react";

const Footer = () => {
  return (
    <footer id="contacto">
      <div class="contenedor">
        <h2 class="titulo">Contact us</h2>
        <form action="" class="form">
          <input class="input" type="text" name="" id="" placeholder="Nombre" />
          <input class="input" type="email" name="" id="" placeholder="Email" />
          <textarea
            class="input"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Mensaje"
          ></textarea>
          <input class="input" type="submit" value="Enviar" />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
