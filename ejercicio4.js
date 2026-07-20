function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === text) {
            return i;
        }
    }
    return null;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Chewbacca"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "Mandaloriano"));
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));

