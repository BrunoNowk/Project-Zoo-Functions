// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalVerify = data.species.find((species) => species.name === animal);
  return animalVerify.residents.every((ages) => ages.age > age);
};

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

module.exports = getAnimalsOlderThan;
