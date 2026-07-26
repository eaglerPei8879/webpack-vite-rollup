import "./style/index.css";

document.body.insertAdjacentHTML("beforeend", `<h1>hello vite</h1>`);

document.body.onclick = () => {
  alert("你点了我耶！");
};

console(/(?i:a)b/.test("ab")); // true
