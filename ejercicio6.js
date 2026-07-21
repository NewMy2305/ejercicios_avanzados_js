function rollDice(caras) {
  const resultado = Math.floor(Math.random() * caras) + 1;
  return resultado;
}



console.log(rollDice(4));
console.log(rollDice(30));
console.log(rollDice(15));
console.log(rollDice(140));