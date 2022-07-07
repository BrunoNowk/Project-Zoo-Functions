const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const specId = employees.find((emp) => emp.id === id).responsibleFor[0];
  const spec = species
    .find((speci) => speci.id === specId)
    .residents.sort((sp, spId) => spId.age - sp.age);
  return Object.values(spec[0]);
};
module.exports = getOldestFromFirstSpecies;
