import x from "./x.js";
import jpg from "./assets/1.jpg";
const app = document.getElementById("app");
console.log(app);
app.innerHTML = `
 <img src="${jpg}"></img>
`;
const btn = document.createElement("button");
btn.innerText = "懒加载";
btn.onclick = () => {
  const promise = import("./lazy.js");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {
      console.log("失败了");
    }
  );
};
app.appendChild(btn);
