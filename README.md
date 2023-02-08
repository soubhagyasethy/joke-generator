# Joke Generator

Want to tell jokes like Chandler but running out of jokes? Worried no more.<br>
Try this joke-generator website for unlimited funny jokes: https://funnyjoke-generator.netlify.app/ 


![image](https://user-images.githubusercontent.com/82697602/217560825-8d8dcaed-dd24-48ce-ab73-c5d955ca5f25.png)


## Technologies:
Vanilla JavaScript, HTML, CSS, Joke API by Sv443.

## Features: 
Clicking the "Get me a joke" button will display a random joke. 

## Explanation:
### HTML: 
<ul>
  <li>The HTML code consists of a container that encloses other elements.</li>
  <li>Inside the container a span contains the laughing emoji. I have used the Unicode of laughing emoji – &128514.</li>
  <li>Here I have used the Joke API by Sv443.</li>
  <li>Following the span is the p element where the joke is displayed. And a button consists of text – ‘Get Me A Joke’.</li>
</ul>

![html](https://user-images.githubusercontent.com/82697602/217585530-a97f7827-711e-45fb-bc69-ee7b41e4afef.png)

### CSS:
<ul>
  <li>The CSS styles used here are pretty basic and self-explanatory. </li>
  <li>Used the usual CSS reset to remove the unwanted paddings and margins.</li>
  <li>The container is 80vmin wide. Using the absolute position and translate property, the container is centred.</li>
  <li>To make it stand out even more, added some box shadow to it.</li>
</ul>

![css](https://user-images.githubusercontent.com/82697602/217584398-9baf0e7b-0867-4c5a-9be7-2d155c40233f.png)


### JavaScript:
<ul>
  <li>Added event listeners to the button and the paragraph, assigned them to variables.</li>
  <li>Next, created a constant and assigned the API URL to it.</li>
  <li>Here I have used the Joke API by Sv443.</li>
  <li>Fetched and got a JSON response. That response is a JSON object. </li>
  <li>I needed the joke key from that object. Extracted the value of the joke key and displayed it in the p element.</li>
  <li>Next, added a click event to the button so that the get Joke function is run on every button click.</li>
  <li>And that’s it. The joke generator was ready. </li>
</ul>

![javascript](https://user-images.githubusercontent.com/82697602/217585137-061140ac-9aa3-4c8f-bb02-a6afb580638f.png)


Here is the link: https://funnyjoke-generator.netlify.app/  Have fun using it!

