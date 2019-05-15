const uuid = require('uuid');

module.exports = {
  makePerson,
  forEvenOnly,
}

function makePerson(first, last) {
  return {
    id: uuid(),
    name: `${first} ${last}`,
  }
}

function forEvenOnly(num, cb) {
  if(num % 2 === 0) {
    cb(num);
  }
}