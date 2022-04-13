import "../css/components.css";
import webpackLogo from "../assets/image.png";

export const saludar = (nombre) => {
  const h1 = document.createElement("h1");
  h1.innerHTML = `Hola ${nombre}!!`;
  document.body.append(h1);

  const img = document.createElement("img");
  img.src = webpackLogo;
  document.body.append(img);
};
