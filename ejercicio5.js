function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === text) {
            return i;
        }
    }
    return null;
}



function removeItem(array, text) {
    const indice = findArrayIndex(array, text);

    if(indice !== -1){
        array.splice(indice, 1);
    }

    return array;
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

console.log(removeItem(mainCharacters, "Chewbacca"));
console.log(removeItem(mainCharacters, "Yoda"));
console.log(removeItem(mainCharacters, "Rey"));
console.log(removeItem(mainCharacters, "Han solo"));





