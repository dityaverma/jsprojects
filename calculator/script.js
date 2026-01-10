const display = document.querySelector(".curr");

const buttons = document.querySelectorAll(".num, .op");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (display.textContent === "0") {
      if ("+-*/".includes(value)) return;
      display.textContent = value;
    } else {
      display.textContent += value;
    }
  });
});

document.querySelector(".clearAll").addEventListener("click", () => {
  display.textContent = "0";
});

document.querySelector(".deleteOne").addEventListener("click", () => {
  if (display.textContent.length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
});

window.calculate = () => {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
};
