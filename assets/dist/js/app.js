const inputColor = document.getElementById("chooseColor");

const updateColorValue = (event) => {
  const rootVariable = document.documentElement;

  rootVariable.style.setProperty("--input-color", event.target.value);
};

inputColor.addEventListener("input", updateColorValue);
