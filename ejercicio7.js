const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indice1, indice2){
    const temporal = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = temporal;

    return array;
}


console.log(fantasticFour);
console.log(swap(fantasticFour, 1, 3));