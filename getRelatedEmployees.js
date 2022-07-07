const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) =>
  employees.some((verifyGe) => verifyGe.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const objectM = employees.filter((manag) =>
    manag.managers.includes(managerId)
  );
  return objectM.map((manag) => `${manag.firstName} ${manag.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
