// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

console.log(data);

const getSpeciesByIds = (...ids) =>
  ids.map((spec) => data.species.find((specF) => specF.id === spec));

module.exports = getSpeciesByIds;

// tive que rever conceito de callback e verificar a documentação do map
// https://youtu.be/jFfg_IdZAc8
