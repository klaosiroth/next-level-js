/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/

// document.getElementById('hero').innerHTML = `
//   <div class="character-card">
//     <h4 class="name"> Wizard </h4>
//     <img class="avatar" src="images/wizard.png" />
//     <p class="health">health: <b> 60 </b></p>
//     <div class="dice-container">
//       <div class="dice"> 6 </div>
//     </div>
//   </div>
// `;

// document.getElementById('monster').innerHTML = `
//   <div class="character-card">
//     <h4 class="name"> Orc </h4>
//     <img class="avatar" src="images/orc.png" />
//     <p class="health">health: <b> 10 </b></p>
//     <div class="dice-container">
//       <div class="dice"> 4 </div>
//     </div>
//   </div>
// `;

/*
CHALLENGE
1. Strip out the hero and monster data (element id, name, avatar, 
health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables 
as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and 
once with the monster variables to that both are rendered
*/

// const heroElementId = 'hero';
// const heroName = 'Wizard';
// const heroAvatar = 'images/wizard.png';
// const heroHealth = '60';
// const heroDiceRoll = 6;

// const monsterElementId = 'monster';
// const monsterName = 'Orc';
// const monsterAvatar = 'images/orc.png';
// const monsterHealth = '10';
// const monsterDiceRoll = 4;

// function renderCharacter(elementId, name, avatar, health, diceRoll) {
//   document.getElementById(elementId).innerHTML = `
//   <div class="character-card">
//     <h4 class="name"> ${name} </h4>
//     <img class="avatar" src="${avatar}" />
//     <p class="health">health: <b> ${health} </b></p>
//     <div class="dice-container">
//       <div class="dice"> ${diceRoll} </div>
//     </div>
//   </div>
// `;
// }

// renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll);
// renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll);

/*
CHALLENGE
1. Convert our consts into two objects called 
"monster" and "hero".
2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string/numbers, 
reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.
*/

// const hero = {
//   elementId: 'hero',
//   name: 'Wizard',
//   avatar: 'images/wizard.png',
//   health: 60,
//   diceRoll: 6,
// };

// const monster = {
//   elementId: 'monster',
//   name: 'Orc',
//   avatar: 'images/orc.png',
//   health: 10,
//   diceRoll: 4,
// };

// function renderCharacter(data) {
//   document.getElementById(data.elementId).innerHTML = `
//     <div class="character-card">
//       <h4 class="name"> ${data.name} </h4>
//       <img class="avatar" src="${data.avatar}" />
//       <div class="health">health: <b> ${data.health} </b></div>
//       <div class="dice-container">
//         <div class="dice"> ${data.diceRoll} </div>
//       </div>
//     </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);

// CHALLENGE
// 1. Deconstruct the data object
// 2. Update the template string as necessary

// const hero = {
//   elementId: 'hero',
//   name: 'Wizard',
//   avatar: 'images/wizard.png',
//   health: 60,
//   diceRoll: 6,
// };

// const monster = {
//   elementId: 'monster',
//   name: 'Orc',
//   avatar: 'images/orc.png',
//   health: 10,
//   diceRoll: 4,
// };

// function renderCharacter(data) {
//   const { elementId, name, avatar, health, diceRoll } = data;
//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//       <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" />
//       <div class="health">health: <b> ${health} </b></div>
//       <div class="dice-container">
//         <div class="dice"> ${diceRoll} </div>
//       </div>
//     </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);

/*
CHALLENGE
1. declare a let called diceHtml and initialize it with an empty 
string. 
2. Use a for loop to update diceHtml so that it contains the 
HTML for our dice. The number of dice needed is specificed in 
the diceCount property of the objects.
3. Each dice should have the following HTML: <div class="dice">6</div>
4. For now, each dice will display 6
5. Swap out the diceRoll variable for diceHtml in the template
*/

// const hero = {
//   elementId: 'hero',
//   name: 'Wizard',
//   avatar: 'images/wizard.png',
//   health: 60,
//   diceRoll: 6,
//   diceCount: 3,
// };

// const monster = {
//   elementId: 'monster',
//   name: 'Orc',
//   avatar: 'images/orc.png',
//   health: 10,
//   diceRoll: 4,
//   diceCount: 1,
// };

// function renderCharacter(data) {
//   const { elementId, name, avatar, health, diceRoll, diceCount } = data;
//   let diceHtml = '';

//   for (let i = 0; i < diceCount; i++) {
//     diceHtml += `<div class="dice">6</div>`;
//   }

//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//       <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" />
//       <div class="health">health: <b> ${health} </b></div>
//       <div class="dice-container">
//         ${diceHtml}
//       </div>
//     </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);

// CHALLENGE
// Update this for loop so it uses a value from the
// new diceRoll array to render out the dice so the
// wizard's dice have values of 3, 1 and 4, and the
// orc's single dice has a value of 2.

// const hero = {
//   elementId: 'hero',
//   name: 'Wizard',
//   avatar: 'images/wizard.png',
//   health: 60,
//   diceRoll: [3, 1, 4],
//   diceCount: 3,
// };

// const monster = {
//   elementId: 'monster',
//   name: 'Orc',
//   avatar: 'images/orc.png',
//   health: 10,
//   diceRoll: [2],
//   diceCount: 1,
// };

// function renderCharacter(data) {
//   const { elementId, name, avatar, health, diceRoll, diceCount } = data;
//   let diceHtml = '';

//   for (let i = 0; i < diceRoll.length; i++) {
//     diceHtml += `<div class="dice">${diceRoll[i]}</div>`;
//   }

//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//       <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" />
//       <div class="health">health: <b> ${health} </b></div>
//       <div class="dice-container">
//         ${diceHtml}
//       </div>
//     </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);

/*
CHALLENGE
1. Instead of the for loop, map over the diceRoll array
and save the new array to diceHTML.
2. Remember to deal with the commas between dice.
3. What keyword should be used to declare diceHTML? 
*/

// const hero = {
//   elementId: 'hero',
//   name: 'Wizard',
//   avatar: 'images/wizard.png',
//   health: 60,
//   diceRoll: [3, 1, 4],
//   diceCount: 3,
// };

// const monster = {
//   elementId: 'monster',
//   name: 'Orc',
//   avatar: 'images/orc.png',
//   health: 10,
//   diceRoll: [2],
//   diceCount: 1,
// };

// function renderCharacter(data) {
//   const { elementId, name, avatar, health, diceRoll, diceCount } = data;
//   const diceHtml = diceRoll
//     .map((num) => {
//       return `<div class="dice">${num}</div>`;
//     })
//     .join('');

//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//       <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" />
//       <div class="health">health: <b> ${health} </b></div>
//       <div class="dice-container">
//         ${diceHtml}
//       </div>
//     </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);

/*
Challenge
1. Create a function called getDiceRollArray that uses a 
   for loop to return an array of random numbers between 1-6. 
2  The function should have diceCount as a parameter and the 
   array it returns should be diceCount length.
3  For testing purposes, call the function with a diceCount of 
   3 and log out the result. 
** check out hint.md for extra help! **
*/

// function getDiceRollArray(diceCount) {
//   const newDiceRolls = [];
//   for (let i = 0; i < diceCount; i++) {
//     newDiceRolls.push(Math.floor(Math.random() * 6));
//   }
//   return newDiceRolls;
// }

// getDiceRollArray(3);

// const hero = {
//   elementId: 'hero',
//   name: 'Wizard',
//   avatar: 'images/wizard.png',
//   health: 60,
//   diceRoll: [3, 1, 4],
//   diceCount: 3,
// };

// const monster = {
//   elementId: 'monster',
//   name: 'Orc',
//   avatar: 'images/orc.png',
//   health: 10,
//   diceRoll: [2],
//   diceCount: 1,
// };

// function renderCharacter(data) {
//   const { elementId, name, avatar, health, diceRoll, diceCount } = data;
//   const diceHtml = diceRoll
//     .map((num) => {
//       return `<div class="dice">${num}</div>`;
//     })
//     .join('');

//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//       <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" />
//       <div class="health">health: <b> ${health} </b></div>
//       <div class="dice-container">
//         ${diceHtml}
//       </div>
//     </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);

/*
Challenge 
1. Create a function called getDiceHtml. 
2. getDiceHtml should map over the array of dice rolls 
   returned from getDiceRollArray to generate the html 
   we need to render our dice with random values. This is 
   the HTML: `<div class="dice">DICE VALUE HERE</div>`
3. Think about the parameters and arguments!
4. Down in renderCharacter(), set diceHtml equals to our 
   new getDiceHtml function. Remember to give it the argument
   it needs. 
5. Delete any code we no longer need.
**hint.md for help**
*/

// function getDiceRollArray(diceCount) {
//   let newDiceRolls = [];
//   for (let i = 0; i < diceCount; i++) {
//     newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
//   }
//   return newDiceRolls;
// }

// function getDiceHtml(diceCount) {
//   return getDiceRollArray(diceCount)
//     .map(function (num) {
//       return `<div class="dice">${num}</div>`;
//     })
//     .join('');
// }

// const hero = {
//   elementId: 'hero',
//   name: 'Wizard',
//   avatar: 'images/wizard.png',
//   health: 60,
//   diceCount: 3,
// };

// const monster = {
//   elementId: 'monster',
//   name: 'Orc',
//   avatar: 'images/orc.png',
//   health: 10,
//   diceCount: 1,
// };
// function renderCharacter(data) {
//   const { elementId, name, avatar, health, diceCount } = data;
//   const diceHtml = getDiceHtml(diceCount);

//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//       <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" />
//       <div class="health">health: <b> ${health} </b></div>
//       <div class="dice-container">
//         ${diceHtml}
//       </div>
//     </div>`;
// }

// renderCharacter(hero);
// renderCharacter(monster);

/* Challenge: 
1. Replace the for loop in getDiceRollArray with a new Array() and fill it 
with 0s as its initial state. The new array should be diceRoll length.
2. Use .map() directly on the array rather than declaring any new variables 
and return a random number from 1-6 in each element of the array.
3. Make sure you delete anything from that function that we no longer need.
*/
function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6) + 1;
  });
}

function getDiceRollArray(diceCount) {
  let newDiceRolls = [];
  for (let i = 0; i < diceCount; i++) {
    newDiceRolls.push(Math.floor(Math.random() * 6) + 1);
  }
  return newDiceRolls;
}

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map(function (num) {
      return `<div class="dice">${num}</div>`;
    })
    .join('');
}

const hero = {
  elementId: 'hero',
  name: 'Wizard',
  avatar: 'images/wizard.png',
  health: 60,
  diceCount: 3,
};

const monster = {
  elementId: 'monster',
  name: 'Orc',
  avatar: 'images/orc.png',
  health: 10,
  diceCount: 1,
};
function renderCharacter(data) {
  const { elementId, name, avatar, health, diceCount } = data;
  const diceHtml = getDiceHtml(diceCount);

  document.getElementById(elementId).innerHTML = `
    <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}" />
      <div class="health">health: <b> ${health} </b></div>
      <div class="dice-container">
        ${diceHtml}
      </div>
    </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
