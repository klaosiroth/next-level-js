1. Your function should take in diceCount as a parameter.
2. It should then return the array it gets by calling
   getDiceRollArray(). Remember to use as an argument.
3. There's no need to set up a new variable - you can map
   over the array returned by getDiceRollArray directly to
   return the html template for each dice.

The .getCharacterHtml method of our constructor is returning
a string containing HTML.

For each character we need to call the .getCharacterHtml method
so that the HTML it returns goes into the innerHTML of the correct div.

Each character in our objects has an elementId property.

Use that property to grab the right element and then set it equals to the
render method for that character.
