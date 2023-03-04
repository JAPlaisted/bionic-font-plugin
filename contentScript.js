// Load Space Mono font
const spaceMonoFont = new FontFace(
  "Space Mono",
  `url(${chrome.runtime.getURL("fonts/SpaceMono-Regular.ttf")})`
);

document.fonts.add(spaceMonoFont);

let boldedWords = true;
let spaceMonoFontEnabled = true;

spaceMonoFont
  .load()
  .then(() => {
    updateStyle();

    // Add toggle button
    const button = document.createElement("button");
    button.textContent = "Bionic Font";
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.borderRadius = "30px";
    button.style.backgroundColor = "#fed983";
    button.style.borderColor = "#fed983";
    button.style.color = "#191919";
    button.style.padding = "5px 10px";

    button.addEventListener("click", () => {
      boldedWords = !boldedWords;
      spaceMonoFontEnabled = !spaceMonoFontEnabled;
      updateStyle();
    });
    document.body.appendChild(button);

    // Wrap each word in a span and add the data-before attribute to the first three letters
    const textNodes = getTextNodes(document.body);
    textNodes.forEach((node) => {
      const words = node.textContent.trim().split(/\s+/);
      const wrappedWords = words.map((word) => {
        if (word.length >= 1) {
          return `<span><span data-before="${word.slice(
            0,
            4
          )}"></span>${word.slice(4)}</span>`;
        } else if (word.length === 2) {
          return `<span><span data-before="${word[0]}"></span>${word[1]}</span>`;
        } else {
          return word;
        }
      });
      node.parentNode.replaceChild(
        document.createRange().createContextualFragment(wrappedWords.join(" ")),
        node
      );
    });
  })
  .catch((error) => {
    console.error(`Error loading Space Mono font: ${error}`);
    alert("Error loading font. Please try again later.");
  });

function getTextNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return [node];
  }

  const textNodes = [];

  const children = node.childNodes;
  for (let i = 0; i < children.length; i++) {
    textNodes.push(...getTextNodes(children[i]));
  }

  return textNodes;
}

function updateStyle() {
  // Create CSS rule to make first three letters of each word bold
  const cssRule = `
              :not(script):not(style) > span::before {
                content: attr(data-before);
                font-weight: ${boldedWords ? "bold" : "normal"};
              }
              body {
                font-family: ${
                  spaceMonoFontEnabled ? "Space Mono" : "unset"
                } !important;
              }
            `;

  const style = document.getElementById("font-effect-style");
  if (style) {
    style.innerHTML = cssRule;
  } else {
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = "font-effect-style";
    style.appendChild(document.createTextNode(cssRule));
    document.head.appendChild(style);
  }
}
