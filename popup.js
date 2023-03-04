// Get the toggle button element
const toggleButton = document.getElementById("toggleButton");

// Send a message to the content script to toggle the effects when the button is clicked
toggleButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggle" });
  });
});
