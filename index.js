const names = ["Guadalupe", "Ollie", "Aki"]
const event = []

function writeCards(names, event){
let newArr = []
for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    newArr.push(message);
}
return newArr;
}
const count = []

function countDown(count){
   let countDown = 0;
   while (countDown <= 10){
    console.log(countDown++);
    }
}

//SE Live 022122 Phase 1 JS Objects East AM (notes)
//Define a character variable and assign it to an object containing name, img, and likes keys.The value of likes should 0 while name and img cand be watherver pokemon characer data you like. 'img' should be an address to an img as a string.
// const pokemon = {
//     name: "charmander"
//     img: "url",
//     likes: 0,
// };
// //when using variables as key, need to use bracke notation to 'interpolate' the value of the variable object [variable]. use when multiple variables or injecting variable.
// character["img"]

// //dot notation, to use we have to know the actual property name
// character.name