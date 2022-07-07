const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }

  const allAnimal = species.find((spec) => spec.name === animal.specie);
  const sexAnimal = allAnimal.residents.filter(
    (spec) => spec.sex === animal.sex
  ).length;
  if (!animal.sex) {
    return allAnimal.residents.length;
  }
  return sexAnimal;
};

module.exports = countAnimals;

// foi necessario fazer algumas revisoes sobre reduce e checar documentacoes
