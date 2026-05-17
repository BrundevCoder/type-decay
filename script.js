const display = document.getElementById("textDisplay");
const textInput = document.getElementById("ipt");

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const fontNames = [
  "sans-serif", "serif", "Arial",
  '"Syne"', "monospace", "Verdana",
  '"Outfit"', "system-ui", "Impact",
  "cursive", "Cambria", '"Courier New"',
  '""Trebuchet MS""', "Helvetica", '"Lucida Console"',
  "Fantasy", "Georgia", "Tahoma", 
  '"Franklin Gothic Medium"', '"Trebuchet MS"', '"Segoe UI"'
];

function randomHexColor() {
  let color = "#";

  const hex = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    "a", "b", "c", "d", "e", "f"
  ];

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }

  return color;
}

function randomFontConfig() {
  let data = {"Name": "Syne", "Weight": 100, "Color": "#000", "Shadow": ""};

  data["Name"] = fontNames[Math.floor(Math.random() * fontNames.length)];
  data["Weight"] = fontWeights[Math.floor(Math.random() * fontWeights.length)];
  data["Color"] = randomHexColor();
  data["Shadow"] = Math.floor(Math.random() * 5) === 1 ? "0 5px 30px" : "0px";

  return data;
}

function update() {
  const fontData = randomFontConfig();

  display.style.fontFamily = fontData["Name"];
  display.style.fontWeight = fontData["Weight"];
  display.style.color = fontData["Color"];
  display.style.textShadow = fontData["Shadow"];

  display.innerText = textInput.value;
}

textInput.addEventListener("input", () => {

  if (textInput.value.length > 200) {
    alert("No More than 200 chars!");
    return;
  }

  if (textInput.value === "" || textInput.value == " ") {
    display.innerText = "Hey! Empty text can't be rendered! :<";
    return;
  }

  update();
});