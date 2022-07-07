const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((entr) => entr.age < 18).length;
  const adult = entrants.filter(
    (entr) => entr.age >= 18 && entr.age < 50
  ).length;
  const senior = entrants.filter((entr) => entr.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return (
    prices.child * countEntrants(entrants).child +
    prices.adult * countEntrants(entrants).adult +
    prices.senior * countEntrants(entrants).senior
  );
};
module.exports = { calculateEntry, countEntrants };
