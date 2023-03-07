## Bionic Font Converter

This is a chrome plugin that applies a custom font and a text effect to all text on a webpage. The custom font used is "Space Mono", which is loaded using the FontFace API. The text effect adds a bolded first three letters to each word by wrapping each word in a span and adding the data-before attribute to the first three letters.

The plugin includes a toggle button that allows users to turn the text effect and custom font on and off. When the button is clicked, the bolded first three letters and the custom font are either enabled or disabled based on their current state.

The plugin code also includes a helper function, getTextNodes, that returns an array of all text nodes in a given DOM node. This function is used to retrieve all text nodes in the document.body and apply the custom font and text effect to them.

The updateStyle function is responsible for applying the CSS styles that implement the text effect and custom font. The function generates a CSS rule that targets all span elements and makes the first three letters bold using the content and font-weight properties. It also sets the font family of the body element to "Space Mono" if the spaceMonoFontEnabled variable is true, and to "unset" if it is false. The generated CSS rule is then added to a style element in the head of the document.

If a style element with the id "font-effect-style" already exists in the head, the updateStyle function simply updates the content of the style element. Otherwise, it creates a new style element and appends it to the head with the generated CSS rule.

Overall, this plugin offers a simple and elegant way to customize the look and feel of text on any webpage.

This product is currently under review via Chrome Webstore

## Installation
To install Bionic Font Converter, follow these steps:

Clone the repository to your local machine.
Open the Chrome browser and navigate to chrome://extensions.
Enable Developer mode in the top right corner of the page.
Click on "Load unpacked" and select the directory where the plugin is located.

## Usage
To use Bionic Font Converter, follow these steps:

Open the Chrome browser and navigate to a webpage.
The plugin will now change all the fonts on the webpage to the Bionic font.
Click on the Bionic Font Converter icon in the top right corner of the browser.
The plugin will now change all the fonts on the webpage to the original font.

## Screen Shots:
![Capture](https://user-images.githubusercontent.com/55415399/222937906-be29e5d8-7861-4b9f-b069-872823684071.JPG)
![Capture](https://user-images.githubusercontent.com/55415399/222937894-993ba949-2bb9-44b7-9326-a1a014418a13.JPG)


## Contributing
If you'd like to contribute to Bionic Font Converter, please follow these guidelines:

Fork the repository and create a new branch for your changes.
Make your changes and test them thoroughly.
Submit a pull request to the main repository and describe your changes in detail.

## Credits
Bionic Font Converter was created by Jonathan Plaisted.
