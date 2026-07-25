import "./style/index.css";
import An from "./assets/image/last.jpg";

document.body.insertAdjacentHTML("beforeend", `<h1>hello 666888 webpack</h1>`);
document.body.insertAdjacentHTML(
  "beforeend",
  `<img src="${An}" alt="Last Image">`,
);
