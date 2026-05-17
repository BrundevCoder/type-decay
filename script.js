const display = document.getElementById("textDisplay");
const textInput = document.getElementById("ipt");

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const fontNames = [
  "sans-serif", "serif", "Arial",
  '"Syne"', "monospace", "Verdana",
  '"Outfit"', "system-ui", "Impact",
  "cursive", "Cambria", '"Courier New"',
  '""Trebuchet MS""', "Helvetica", '"Lucida Console"',
  "Fantasy", "Georgia"
];
const fontColors = [
  "#000", "#333"
];

function randomFontConfig() {
  let data = {"Name": "Syne", "Weight": 100, "Color": "#000"};

  data["Name"] = fontNames[Math.floor(Math.random() * fontNames.length)];
  data["Weight"] = fontWeights[Math.floor(Math.random() * fontWeights.length)];
  data["Color"] = fontColors[Math.floor(Math.random() * fontColors.length)];

  return data;
}

function update() {
  const fontData = randomFontConfig();

  display.style.fontFamily = fontData["Name"];
  display.style.fontWeight = fontData["Weight"];
  display.style.color = fontData["Color"];

}

textInput.addEventListener("input", () => {
  update()
});