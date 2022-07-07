const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const specieRegion = () => {
  const animalL = {};
  species.forEach((spec) => {
    if (!animalL[spec.location]) {
      animalL[spec.location] = [];
      animalL[spec.location].push(spec.name);
    } else if (animalL[spec.location]) {
      animalL[spec.location].push(spec.name);
    }
  });
  return animalL;
};

const mapName = (ord, sex) => {
  const empObj = {};
  species.forEach((spec) => {
    if (!empObj[spec.location]) {
      empObj[spec.location] = [];
    }
    let residents = [...spec.residents];
    if (sex) {
      residents = residents.filter((specSx) => specSx.sex === sex);
    }
    residents = residents.map((specSx) => specSx.name);
    if (ord === true) {
      residents.sort();
    }
    empObj[spec.location].push({ [spec.name]: residents });
  });
  return empObj;
};

const getAnimalMap = (options = {}) => {
  const { inNames, ord, sex } = options;
  if (inNames === true) return mapName(ord, sex);
  return specieRegion();
};

module.exports = getAnimalMap;
