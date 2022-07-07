const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const day = Object.keys(hours);
const zooAnimal = species.map((animal) => animal.name);

const daySchedule = (days) => {
  if (days === 'Monday') {
    const closed = 'CLOSED';
    return {
      [days]: { officeHour: closed, exhibition: 'The zoo will be closed!' },
    };
  }
  const hourDay = `Open from ${hours[days].open}am until ${hours[days].close}pm`;
  const checkAvaible = species.filter(({ availability }) =>
    availability.includes(days)
  );
  const mapAni = checkAvaible.map(({ name }) => name);

  return { [days]: { officeHour: hourDay, exhibition: mapAni } };
};

const getSchedule = (scheduleTarget) => {
  if (day.includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  if (zooAnimal.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  return day.reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      ...daySchedule(currentValue),
    }),
    {}
  );
};

module.exports = getSchedule;
