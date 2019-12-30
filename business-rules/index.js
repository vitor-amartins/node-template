const authentication = require('./authentication');
const people = require('./people');

module.exports = {
  ...authentication,
  ...people,
};
